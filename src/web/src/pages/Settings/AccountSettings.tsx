import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { updateAccountMutation } from "@app/services/mutations";
import { getAccountSettings } from "../../services/api";
import AccountSettingsForm from "../../components/forms/Account/AccountSettingsForm";
import './AccountSettings.scss';
import { ContentHeader } from "../../components";
import { OverlaySpinner } from "../../components/OverlaySpinner";

const AccountSettings: React.FC = () => {
    const [formInitialValues, setFormInitialValues] = useState({
        userName: "",
        profilePicture: null,
        realName: "",
        email: "",
        phoneNumber: "",
        timeZoneId: "",
        emailNotification: false,
        smsNotification: false,
    });
    const [timeZoneList, setTimeZoneList] = useState<SelectListOption[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);

    const updateAccountSettings = updateAccountMutation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAccountSettings();
                if (data.isSucceed) {
                    setFormInitialValues({
                        userName: data.data.userName || "",
                        profilePicture: null,
                        realName: data.data.realName || "",
                        email: data.data.email || "",
                        phoneNumber: data.data.phoneNumber || "",
                        timeZoneId: data.data.timeZoneId || "",
                        emailNotification: data.data.emailNotification || false,
                        smsNotification: data.data.smsNotification || false,
                    });
                    setTimeZoneList(data.data.timeZoneList || []);
                } else {
                    setFetchError("Failed to fetch account settings.");
                }
            } catch (error) {
                setFetchError(`Error fetching data: ${error}`);
            } finally {
                setLoadingData(false);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = useCallback(async (values: UserProfile) => {
        setIsSubmitting(true);
        try {
            const response = await updateAccountSettings.mutateAsync(values);
            if (response.isSucceed) {
                toast.success("Settings updated successfully");
                setFormInitialValues({
                    userName: response.data.userName || "",
                    profilePicture: null,
                    realName: response.data.realName || "",
                    email: response.data.email || "",
                    phoneNumber: response.data.phoneNumber || "",
                    timeZoneId: response.data.timeZoneId || "",
                    emailNotification: response.data.emailNotification || false,
                    smsNotification: response.data.smsNotification || false,
                });
                setTimeZoneList(response.data.timeZoneList || []);
            }
        } catch (error) {
            toast.error(`Error submitting form: ${error}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [updateAccountSettings]);

    if (loadingData || isSubmitting) {
        return <OverlaySpinner />;
    }

    if (fetchError) {
        return <div>{fetchError}</div>;
    }

    return (
        <>
            <ContentHeader title="Account" body="Settings" />

            <AccountSettingsForm
                initialValues={formInitialValues}
                timeZoneList={timeZoneList}
                onSubmit={handleSubmit}
            />
        </>
    );
};

export default AccountSettings;