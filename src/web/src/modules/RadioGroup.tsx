import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

interface RadioGroupProps {
    control: UseFormReturn<any>['control'];
    options: RadioOption[];
    name: string;
    colSize: number;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ control, options, name, colSize }) => {
    return (
        <div className="row">
            {options.map((option, index) => (
                <div className={`col-${colSize} my-3 checkboxes`} key={index}>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <>
                                <input
                                    type="radio"
                                    id={`${name}-${option.value}`}
                                    value={option.value}
                                    checked={field.value === option.value}
                                    onChange={() => field.onChange(option.value)}
                                />
                                <label htmlFor={`${name}-${option.value}`} className="ms-1">
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

export default RadioGroup;