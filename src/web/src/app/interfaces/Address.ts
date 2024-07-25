export interface MarkerType {
    lat: number;
    lng: number;
    time: Date;
}

export interface AutoCompleteAddressProps {
    checked: { useDefault: boolean; useBilling: boolean };
    control: any;
    isSubmitting: boolean;
    handleCheckboxChange: (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddressSelect: (addressDetails: AddressDetails) => void;
}

export interface AddressDetails {
    streetNumber: string;
    route: string;
    locality: string;
    stateCode: string;
    zipCode: string;
    country: string;
    lat: number;
    lng: number;
}

export interface CheckboxControllerProps {
    checked: boolean;
    control: any;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: React.ReactNode;
}