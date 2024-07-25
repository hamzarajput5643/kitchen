import React from "react";
import { Controller, useFormContext, UseFormReturn } from "react-hook-form";
import "./MenuDetails.scss";
import { FaPlus } from "react-icons/fa";
import GenericDropdown from "@app/modules/GenericDropdown";
import { allergens } from "@app/utils/constants";
import { useIngredients, useMainIngredients } from "@app/services/queries";
import CheckboxGroup from "@app/modules/CheckboxGroup";


const MenuDetails: React.FC = () => {
    const { control } = useFormContext();
    const { data: mainIngredients, isLoading: isMainIngredientsLoading } = useMainIngredients({ skip: false });
    const { data: ingredients, isLoading: isIngredientsLoading } = useIngredients({ skip: false });

    if (isMainIngredientsLoading || isIngredientsLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title mb-2">Ingredient Details</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <label className="label-font mb-2">Main Ingredient</label>
                    <GenericDropdown
                        name="mainIngredient"
                        control={control}
                        options={mainIngredients}
                        label="main ingredients"
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <label className="label-font">Additional Ingredient</label>
                    {Array.from({ length: 5 }).map((_, rowIndex) => (
                        <div className="row my-3 checkboxes" key={rowIndex}>
                            {Array.from({ length: 3 }).map((_, colIndex) => (
                                <div className="col-4" key={colIndex}>
                                    <GenericDropdown
                                        name={`ingredient[${rowIndex * 3 + colIndex}]`}
                                        control={control}
                                        options={ingredients}
                                        label=""
                                    />
                                </div>
                            ))}
                            {/* <div className="col-3">
                                <div className="text-center">
                                    <FaPlus className="me-2 mb-1" style={{ color: "green" }} />
                                    Add Ingredient
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title mb-2">Allergen Information</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <CheckboxGroup
                        control={control}
                        options={allergens.map(d => ({ label: d.label, name: d.name || '' }))}
                        colSize={3}
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4 checkboxes">
                    <Controller
                        name="allergenFree"
                        control={control}
                        render={({ field }) => (
                            <>
                                <input type="checkbox" id="no-allergens" {...field} checked={!!field.value} />
                                <label className="ms-1" htmlFor="no-allergens">This dish contains no common allergens.</label>
                            </>
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default MenuDetails;