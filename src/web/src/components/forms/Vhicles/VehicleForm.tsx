import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { VehicleFormValues } from '@app/app/types/Vehicle';
import { addVehicleMutation } from '@app/services/mutations';
import './VehicleForm.css';
import { getVehicleColors, getVehicleMakes, getVehicleModels, getVehicleStates, loadVehicleModels } from '@app/services/api';

const validationSchema = z.object({
    VehicleMakeId: z.string().min(1, 'Make is Required!'),
    VehicleModelId: z.string().min(1, 'Model is Required!'),
    VehicleYear: z.string().min(1, 'Year is Required!').refine((val) => {
        const year = parseInt(val);
        return year >= 1900 && year <= new Date().getFullYear();
    }, {
        message: 'Invalid year',
    }),
    VehicleColorId: z.string().min(1, 'Color is Required!'),
    VehicleStateCode: z.string().min(1, 'State is Required!'),
    VehiclePlateNumber: z.string().min(1, 'Plate Number is Required!'),
    PrimaryVehicleFlag: z.boolean(),
});

const VehicleForm: React.FC = () => {
    const [makes, setMakes] = useState<SelectListOption[]>([]);
    const [models, setModels] = useState<SelectListOption[]>([]);
    const [colors, setColors] = useState<SelectListOption[]>([]);
    const [states, setStates] = useState<SelectListOption[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const useVehicleMutation = addVehicleMutation();

    const requestQueue: any = [];
    let isRequestInProgress = false;

    const processQueue = async () => {
        if (isRequestInProgress || requestQueue.length === 0) {
            return;
        }

        isRequestInProgress = true;
        const { makeId, resolve, fetchDataFn } = requestQueue.shift();

        try {
            if (fetchDataFn) {
                await fetchDataFn();
            } else {
                const response = await loadVehicleModels(makeId);
                setModels(response?.data);
                setValue('VehicleModelId', '');
                resolve();
            }
        } catch (error) {
            console.error("Error loading vehicle models:", error);
        } finally {
            isRequestInProgress = false;
            processQueue();
        }
    };

    const handleMakeChange = async (makeId: number) => {
        return new Promise<void>((resolve) => {
            requestQueue.push({ makeId, resolve });
            processQueue();
        });
    };

    const fetchData = async () => {
        return new Promise<void>((resolve) => {
            requestQueue.push({ fetchDataFn: async () => {
                try {
                    const [fetchedMakes, fetchedColors, fetchedModels, fetchedStates] = await Promise.all([
                        getVehicleMakes(),
                        getVehicleColors(),
                        getVehicleModels(),
                        getVehicleStates()
                    ]);

                    setMakes(fetchedMakes);
                    setColors(fetchedColors);
                    setModels(fetchedModels);
                    setStates(fetchedStates);
                } catch (error) {
                    setMakes([]);
                    setColors([]);
                    setModels([]);
                    setStates([]);
                    setError('Failed to fetch data.');
                }
                resolve();
            }});
            processQueue();
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const {
        control,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm<VehicleFormValues>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            VehicleMakeId: '',
            VehicleModelId: '',
            VehicleYear: 0,
            VehicleColorId: '',
            VehicleStateCode: '',
            VehiclePlateNumber: '',
            PrimaryVehicleFlag: false,
        },
    });

    const onSubmit = async (data: VehicleFormValues) => {
        setIsSubmitting(true); // Start animation
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const res = await useVehicleMutation.mutateAsync(data);
            if (res.isSucceed) {
                toast.success('Form submitted successfully!');
                reset();
            } else {
                toast.error(`${res.messages.vehiclePlateNumber}`);
            }
        } catch (error) {
            toast.error(`Error submitting form: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card card-info">
            <div className="card-header pb-2 pt-2">
                <h3 className='card-title'>Add New Vehicle</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3 form-group">
                        <label htmlFor="VehicleMakeId" className="control-label">Make</label>
                        <Controller
                            control={control}
                            name="VehicleMakeId"
                            render={({ field }) => (
                                <select
                                    {...field}
                                    id="VehicleMakeId"
                                    className="form-control"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        field.onChange(e);
                                        handleMakeChange(Number(e.target.value));
                                    }}
                                >
                                    <option value="">Select Make</option>
                                    {makes.map(make => (
                                        <option key={make.value} value={make.value}>{make.text}</option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.VehicleMakeId && <div className="text-danger">{errors.VehicleMakeId.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="VehicleModelId" className="control-label">Model</label>
                        <Controller
                            control={control}
                            name="VehicleModelId"
                            render={({ field }) => (
                                <select {...field} id="VehicleModelId" className="form-control">
                                    <option value="">Select Model</option>
                                    {models.map(model => (
                                        <option key={model.value} value={model.value}>{model.text}</option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.VehicleModelId && <div className="text-danger">{errors.VehicleModelId.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="VehicleYear" className="control-label">Year</label>
                        <Controller
                            control={control}
                            name="VehicleYear"
                            render={({ field }) => (
                                <input type="number" {...field} id="VehicleYear" className="form-control" />
                            )}
                        />
                        {errors.VehicleYear && <div className="text-danger">{errors.VehicleYear.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="VehicleColorId" className="control-label">Color</label>
                        <Controller
                            control={control}
                            name="VehicleColorId"
                            render={({ field }) => (
                                <select {...field} id="VehicleColorId" className="form-control">
                                    <option value="">Select Color</option>
                                    {colors.map(color => (
                                        <option key={color.value} value={color.value}>{color.text}</option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.VehicleColorId && <div className="text-danger">{errors.VehicleColorId.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="VehicleStateCode" className="control-label">State</label>
                        <Controller
                            control={control}
                            name="VehicleStateCode"
                            render={({ field }) => (
                                <select {...field} id="VehicleStateCode" className="form-control">
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                        <option key={state.value} value={state.value}>{state.text}</option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.VehicleStateCode && <div className="text-danger">{errors.VehicleStateCode.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="VehiclePlateNumber" className="control-label">Plate Number</label>
                        <Controller
                            control={control}
                            name="VehiclePlateNumber"
                            render={({ field }) => (
                                <input type="text" {...field} id="VehiclePlateNumber" className="form-control" />
                            )}
                        />
                        {errors.VehiclePlateNumber && <div className="text-danger">{errors.VehiclePlateNumber.message}</div>}
                    </div>

                    <div className="col-md-3 form-group">
                        <label htmlFor="PrimaryVehicleFlag" className="control-label">Primary Vehicle</label>
                        <br />
                        <Controller
                            control={control}
                            name="PrimaryVehicleFlag"
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={e => onChange(e.target.checked)}
                                    onBlur={onBlur}
                                    ref={ref}
                                    id="PrimaryVehicleFlag"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className='d-flex flex-row-reverse'>
                    <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                        {isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : 'Submit'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default VehicleForm;