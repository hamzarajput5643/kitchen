import React, { useState, useRef, useEffect, Suspense } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./MenuHome.scss";
import ImagePreview from "./ImagePreview";
import GenericDropdown from "@app/modules/GenericDropdown";
import { MenuFormValues } from "@app/app/types/Menu";
import { useMenuTypes } from "@app/services/queries";

interface MenuHomeProps {
    imagePreviews: string[];
    files: File[];
    fileInputRef: React.RefObject<HTMLInputElement>;
    setImagePreviews: React.Dispatch<React.SetStateAction<string[]>>;
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const MenuHome: React.FC<MenuHomeProps> = ({
    imagePreviews,
    files,
    fileInputRef,
    setImagePreviews,
    setFiles,
}) => {
    const { control, setValue, formState: { errors } } = useFormContext<MenuFormValues>();
    

    const { data: menuTypes } = useMenuTypes({ skip: false });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const newFiles = Array.from(e.target.files);
        const existingFileNames = new Set(files.map(file => file.name));

        const filteredNewFiles = newFiles.filter(file => !existingFileNames.has(file.name));
        const newPreviews = filteredNewFiles.map(file => URL.createObjectURL(file));

        setFiles(prev => [...prev, ...filteredNewFiles]);
        setImagePreviews(prev => [...prev, ...newPreviews]);
        setValue("files", [...files, ...filteredNewFiles], { shouldValidate: true });
    };

    const handleImageDelete = (index: number) => {
        setImagePreviews(prev => {
            const newImagePreviews = prev.filter((_, i) => i !== index);
            return newImagePreviews;
        });

        setFiles(prev => {
            const updatedFiles = prev.filter((_, i) => i !== index);
            setValue("files", updatedFiles, { shouldValidate: true });
            return updatedFiles;
        });

        URL.revokeObjectURL(imagePreviews[index]);

        if (fileInputRef.current) {
            const newFileInput = fileInputRef.current;
            newFileInput.value = '';
            const dataTransfer = new DataTransfer();
            files.forEach((file, i) => {
                if (i !== index) dataTransfer.items.add(file);
            });
            newFileInput.files = dataTransfer.files;
        }
    };

    return (
        <>
            <div className="card card-info">
                <div className="card-header">
                    <h3 className="card-title mb-2">Item Description</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-md-4">
                    <label className="label-font mb-2">Name</label>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                type="text"
                                className="form-control"
                                {...field}
                            />
                        )}
                    />
                    {errors.title && <div className="text-danger">{errors.title.message}</div>}
                </div>
                <div className="col-12 col-md-4">
                    <label className="label-font mb-2">Types</label>
                    <Suspense fallback={<p>Loading item types...</p>}>
                        <GenericDropdown
                            name="typeId"
                            control={control}
                            options={menuTypes}
                            label="item type"
                        />
                    </Suspense>
                    {errors.typeId && <div className="text-danger">{errors.typeId.message}</div>}
                </div>
                <div className="col-12 col-md-4">
                    <label className="label-font mb-2">Images</label>
                    <Controller
                        name="files"
                        control={control}
                        defaultValue={[]}
                        render={({ field }) => (
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => {
                                    handleFileChange(e);
                                    field.onChange([...Array.from(e.target.files ?? [])]);
                                }}
                                multiple
                                ref={fileInputRef}
                            />
                        )}
                    />
                    {errors.files && <div className="text-danger">{errors.files.message}</div>}
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <label className="label-font mb-2">Description</label>
                    <Controller
                        name="details"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <textarea
                                rows={5}
                                className="form-control"
                                {...field}
                            />
                        )}
                    />
                    {errors.details && <div className="text-danger">{errors.details.message}</div>}
                </div>
            </div>
            <Suspense fallback={<p>Loading image previews...</p>}>
                <ImagePreview imagePreviews={imagePreviews} onDelete={handleImageDelete} />
            </Suspense>
        </>
    );
}

export default MenuHome;