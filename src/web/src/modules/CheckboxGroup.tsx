import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

interface CheckboxOption {
    label: string;
    name: string;
}

interface CheckboxGroupProps {
    control: UseFormReturn<any>['control'];
    options: CheckboxOption[];
    colSize: number;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ control, options, colSize }) => {
    return (
        <div className="row">
            {options.map((option, index) => (
                <div className={`col-${colSize} my-3 checkboxes`} key={index}>
                    <Controller
                        name={option.name}
                        control={control}
                        render={({ field }) => (
                            <>
                                <input
                                    type="checkbox"
                                    id={option.name}
                                    {...field}
                                    checked={!!field.value}
                                />
                                <label htmlFor={option.name} className="ms-1">
                                    {option.label}
                                </label>
                            </>
                        )}
                    />
                </div>
            ))}
        </div>
    );
};

export default CheckboxGroup;