import React, { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import "./MenuItems.scss";
import Tabsbuttons from "./Tabsbuttons";
import MenuHome from "@app/components/forms/Menu/MenuHome";
import MenuDetails from "@app/components/forms/Menu/MenuDetails";
import MenuSearchOptions from "@app/components/forms/Menu/MenuSearchOptions";
import { MenuFormValues } from "@app/app/types/Menu";
import { ContentHeader } from "@app/components";
import { addMenuMutation } from "@app/services/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@app/components/forms/Menu/custom/MenuSchema";
import { toast } from "react-toastify";
import { defaultValues } from "@app/components/forms/Menu/custom/MenuValues";

type Tab = "Home" | "Details" | "SearchOptions";

const NewMenuItems: React.FC = () => {
    const [activeTabs, setActiveTabs] = useState<Tab>("Home");
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const methods = useForm<MenuFormValues>({
        resolver: zodResolver(validationSchema),
        defaultValues: defaultValues,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const useMenuMutation = addMenuMutation();

    const handleTabs = (tab: Tab) => {
        setActiveTabs(tab);
    };

    const onSubmit = async (data: MenuFormValues) => {
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const res = await useMenuMutation.mutateAsync(data);
            if (res.isSucceed) {
                toast.success('Data saved successfully!');
                methods.reset();
                setFiles([]);
                setImagePreviews([]);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                toast.error(`${res.messages.Error}`);
            }
        } catch (error) {
            toast.error(`Error submitting form: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ContentHeader title="Menu" body="Menu Item" />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="NewMenuItems-box">
                        <div className="NewMenuItems-header">
                            <Tabsbuttons
                                value="Home"
                                onclick={() => handleTabs("Home")}
                                isactive={activeTabs === "Home"}
                            />
                            <Tabsbuttons
                                value="Details"
                                onclick={() => handleTabs("Details")}
                                isactive={activeTabs === "Details"}
                            />
                            <Tabsbuttons
                                value="Search Options"
                                onclick={() => handleTabs("SearchOptions")}
                                isactive={activeTabs === "SearchOptions"}
                            />
                        </div>
                        <div className="NewMenuItems-body">
                            {activeTabs === "Home" &&
                                <MenuHome
                                    imagePreviews={imagePreviews}
                                    files={files}
                                    fileInputRef={fileInputRef}
                                    setImagePreviews={setImagePreviews}
                                    setFiles={setFiles} />
                            }
                            {activeTabs === "Details" && <MenuDetails />}
                            {activeTabs === "SearchOptions" && <MenuSearchOptions />}
                            <div className='d-flex flex-row-reverse mt-3'>
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                                    {isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : 'Save Menu'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};

export default NewMenuItems;