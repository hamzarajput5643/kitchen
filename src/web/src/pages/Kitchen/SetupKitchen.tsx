import { ContentHeader } from "@app/components";
import "./SetupKitchen.scss";
import SettingsForm from "@app/components/forms/Kitchen/SettingsForm";
import { useKitchenSettings } from "@app/services/queries";
import { KitchenSettings, PhotoType } from "@app/app/types/Settings";

const SetupKitchen = () => {
    const initialValues: KitchenSettings = {
        kitchenId: 0,
        backgroundImage: null,
        profileImage: null,
        kitchenName: '',
        contactPhone: '',
        contactEmail: '',
        aboutMe: '',
        notes: '',
        paypalEmail: '',
        paymentPolicy: '',
        cancellationPolicy: '',
        taxRate: 0,
        salesTaxFlag: false,
        facebookPage: '',
        googlePage: null,
        twitterPage: null,
        twitterUserName: null,
        linkedInPage: null,
        youTubePage: null,
        galleryPhotos: [],
        photoType: PhotoType.Profile
    };

    const { data, isLoading, isError } = useKitchenSettings();

    if (isError) return <p>Error fetching data</p>;

    return (
        <>
            <ContentHeader title="Kitchen" body="Settings" />

            <SettingsForm
                initialValues={data?.data || initialValues}
                isLoading={isLoading}
            />
        </>
    );
};

export default SetupKitchen;