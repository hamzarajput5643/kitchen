import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddressFormValues } from '@app/app/types/Address';
import { Controller, useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';
import './AddressForm.css';
import AutoCompleteAddress from './AutoComplete';
import { addAddressMutation } from '@app/services/mutations';
import { toast } from 'react-toastify';

const validationSchema = z.object({
    NewAddress: z.string().min(1, 'Address is Required!'),
    useDefault: z.boolean().optional(),
    useBilling: z.boolean().optional(),
    StreetNumber: z.string().optional(),
    Route: z.string().optional(),
    Locality: z.string().optional(),
    StateCode: z.string().optional(),
    PostalCode: z.string().optional(),
    Country: z.string().optional(),
    CityLat: z.string().optional(),
    CityLng: z.string().optional(),
});

const AddressForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [checked, setChecked] = useState({
        useDefault: false,
        useBilling: false
    });

    const handleCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(prevState => ({
            ...prevState,
            [name]: event.target.checked
        }));
        setValue(name as keyof AddressFormValues, event.target.checked);
    };

    const { control, handleSubmit, setValue, reset, formState: { errors } } = useForm<AddressFormValues>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            NewAddress: '',
            useDefault: false,
            useBilling: false,
            StreetNumber: '',
            Route: '',
            Locality: '',
            StateCode: '',
            PostalCode: '',
            Country: '',
            CityLat: '',
            CityLng: '',
        },
    });

    const useAddressMutation = addAddressMutation();

    const onSubmit = async (data: AddressFormValues) => {
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const res = await useAddressMutation.mutateAsync(data);
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

    const handleAddressSelect = useCallback((addressDetails: {
        streetNumber: string;
        route: string;
        locality: string;
        stateCode: string;
        zipCode: string;
        country: string;
        lat: number;
        lng: number;
    }) => {
        setValue("NewAddress", `${addressDetails.streetNumber} ${addressDetails.route}, ${addressDetails.locality}, ${addressDetails.stateCode} ${addressDetails.zipCode}, ${addressDetails.country}`);
        setValue('StreetNumber', addressDetails.streetNumber);
        setValue('Route', addressDetails.route);
        setValue('Locality', addressDetails.locality);
        setValue('StateCode', addressDetails.stateCode);
        setValue('PostalCode', addressDetails.zipCode);
        setValue('Country', addressDetails.country);
        setValue('CityLat', addressDetails.lat.toString());
        setValue('CityLng', addressDetails.lng.toString());
    }, [setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card card-info">
            <div className="card-header pb-2 pt-2">
                <h3 className='card-title'>Add New Address</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3 form-group mt-2" style={{ paddingLeft: "25px" }}>
                        <span><i className="fa fa-plus" style={{ color: "#c6442d", paddingRight: "10px" }}></i>Add New Address</span>
                    </div>
                    <AutoCompleteAddress
                        control={control}
                        checked={checked}
                        isSubmitting={isSubmitting}
                        handleCheckboxChange={handleCheckboxChange}
                        onAddressSelect={handleAddressSelect}
                        errors={errors}
                    />
                    <Controller
                        name="StreetNumber"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="Route"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="Locality"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="StateCode"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="PostalCode"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="Country"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="CityLat"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                    <Controller
                        name="CityLng"
                        control={control}
                        render={({ field }) => <input type="hidden" {...field} />}
                    />
                </div>
            </div>
        </form>
    );
};

export default AddressForm;