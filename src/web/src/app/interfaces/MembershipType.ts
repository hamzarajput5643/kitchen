export interface MembershipType {
    description: string;
    orders: boolean;
    sales: boolean;
    items?: boolean;
    noOfItems: string;
    lengthDesc: string;
    price: number;
    typeId: number;
}