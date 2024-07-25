import { DateTime } from "luxon";

export type ProductOrder = {
    ProductOrderId: number;
    UserName: string;
    OrderDate: string;
    MenuItemTitle: string;
    ProductQuantity: number;
    ProductPrice: number;
    ProductExtPrice: number;
    OrderStatusDesc: string;
    OrderApproved: boolean;
    OrderCancelledFlag: boolean;
    OrderInvoicedTimestamp: DateTime;
    OrderPaid: boolean;
    OrderReady: boolean;
    OrderReviewed: boolean;
};