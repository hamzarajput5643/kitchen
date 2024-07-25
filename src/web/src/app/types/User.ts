import { MenuItem } from "./Menu";

export type User = {
    id: number,
    name: string,
    email: string
};

export type UserMenuItem = {
    isSucceed: boolean;
    messages: Record<string, any>;
    data: {
        activeCount: number;
        allItemCount: number;
        archivedCount: number;
        availableCount: number;
        menuItems: MenuItem[];
    };
}