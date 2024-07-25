import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface GenericDropdownProps {
    name: string;
    control: UseFormReturn<any>["control"];
    options: SelectListOption[] | undefined;
    label: string;
    defaultValue?: string;
}

const GenericDropdown: React.FC<GenericDropdownProps> = ({ name, control, options, label, defaultValue }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || ""}
            render={({ field }) => (
                <select
                    className="form-control"
                    id={name}
                    {...field}
                    value={field.value ?? ""}
                >
                    <option value="">Select {label}</option>
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            )}
        />
    );
};

export default GenericDropdown;