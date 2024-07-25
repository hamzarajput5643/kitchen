interface UserProfile {
    userName: string;
    profilePicture: File | null;
    realName: string;
    email: string;
    phoneNumber: string;
    timeZoneId: string;
    emailNotification: boolean;
    smsNotification: boolean;
}