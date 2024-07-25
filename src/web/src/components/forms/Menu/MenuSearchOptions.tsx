import React, { Suspense } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./MenuSearchOptions.scss";
import GenericDropdown from "@app/modules/GenericDropdown";
import { useCuisineTypes } from "@app/services/queries";
import { TagsInput } from "react-tag-input-component";
import { dietTypes, mealTypes, menuItemTypes, organicOptions, spicinessLevels } from "@app/utils/constants";
import RadioGroup from "../../../modules/RadioGroup";
import CheckboxGroup from "@app/modules/CheckboxGroup";


const MenuSearchOptions: React.FC = () => {
    const { control } = useFormContext();
    const { data: cuisineTypes } = useCuisineTypes({ skip: false });

    return (
        <>
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title mb-2">Menu item Search Details</h3>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <label className="label-font fw-bold">Menu item Type</label>
                    <RadioGroup
                        control={control}
                        options={menuItemTypes}
                        name="vegRadio"
                        colSize={3}
                    />
                </div>
                <div className="col-12">
                    <label className="label-font fw-bold">Organic?</label>
                    <RadioGroup
                        control={control}
                        options={organicOptions}
                        name="organic"
                        colSize={4}
                    />
                </div>
                <div className="col-12">
                    <label className="label-font fw-bold">Spicy Meter</label>
                    <RadioGroup
                        control={control}
                        options={spicinessLevels}
                        name="spicyMeter"
                        colSize={3}
                    />
                </div>
                <div className="col-12">
                    <label className="label-font fw-bold">Diet Type</label>
                    <CheckboxGroup
                        control={control}
                        options={dietTypes.map(d => ({ label: d.label, name: d.name || '' }))}
                        colSize={3}
                    />
                </div>
                <div className="col-12">
                    <label className="label-font fw-bold">Meal Type</label>
                    <CheckboxGroup
                        control={control}
                        options={mealTypes.map(m => ({ label: m.label, name: m.name || '' }))}
                        colSize={3}
                    />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <label className="label-font fw-bold mb-2">Cuisine Type</label>
                    <div className="row">
                        {[...Array(3)].map((_, index) => (
                            <div className="col-4" key={index}>
                                <Suspense fallback={<p>Loading item types...</p>}>
                                    <GenericDropdown
                                        name={`cuisineId${index}`}
                                        control={control}
                                        options={cuisineTypes}
                                        label="item type"
                                    />
                                </Suspense>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <label className="label-font fw-bold mb-2">Other Search Tags</label>
                    <Controller
                        name="tags"
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => (
                            <TagsInput
                                value={field.value}
                                onChange={(tags: string[]) => field.onChange(tags)}
                                placeHolder="Enter Tags"
                            />
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default MenuSearchOptions;