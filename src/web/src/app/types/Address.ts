export type Address = {
    fullGoogleAddress: string;
    defaultFlag?: boolean;
    billingAddress?: boolean;
    addressId: number;
}

export type AddressFormValues = {
    NewAddress: string;
    useDefault?: boolean;
    useBilling?: boolean;
    StreetNumber?: string;
    Route?: string;
    Locality?: string;
    StateCode?: string;
    PostalCode?: string;
    Country?: string;
    CityLat?: string;
    CityLng?: string;
}