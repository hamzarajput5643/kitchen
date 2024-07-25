export type KitchenSettings = {
    kitchenId: number;
    backgroundImage: File | null;
    profileImage: File | null;
    kitchenName: string;
    contactPhone: string;
    contactEmail: string;
    aboutMe: string;
    notes: string;
    paypalEmail: string;
    paymentPolicy: string;
    cancellationPolicy: string;
    taxRate: number;
    salesTaxFlag: boolean;
    facebookPage: string | null;
    googlePage: string | null;
    twitterPage: string | null;
    twitterUserName: string | null;
    linkedInPage: string | null;
    youTubePage: string | null;
    galleryPhotos: FileList[];
    photoType: PhotoType
}

export type AccountSettings = {
    userName: string;
    realName: string;
    email: string;
    phoneNumber: string;
    emailNotification: boolean;
    smsNotification: boolean;
    timeZoneList: SelectListOption[];
    timeZoneId: string;
};


export enum PhotoType {
    Profile = 'Profile',
    Background = 'Background',
    Gallery = 'Gallery'
}

declare function Href(url: string): string;