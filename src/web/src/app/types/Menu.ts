export type MenuItem = {
    menuItemId: number;
    menuItemTitle: string;
    dateCreated: string;
    currentStatusId: number;
    menuItemPhoto: any[];
    menuItemStatusId: number;
    statusId: number;
    menuItemStatusDesc: string,
    productCount: number
}

export type MenuFormValues = {
    title: string;
    typeId: number;
    files: File[] | null;
    mainIngredient: string;
    details: string;
    organic: number | null;
    allergenFree: boolean;
    eggs: boolean;
    wheat: boolean;
    gluten: boolean;
    dairy: boolean;
    peanuts: boolean;
    treenuts: boolean;
    shellfish: boolean;
    soy: boolean;
    highProtein: boolean;
    lowFat: boolean;
    lowCarb: boolean;
    lowCal: boolean;
    paleo: boolean;
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    dessert: boolean;
    cuisineId0?: string;
    cuisineId1?: string;
    cuisineId2?: string;
    tags: string[];
    vegRadio: number | null;
    spicyMeter: number | null;
    ingredient: string[];
}

export interface Ingredient {
    id: number;
    name: string;
}

export type ItemType = {
    menuItemTypeId: number;
    menuItemTypeName: string;
}

export type ItemStatus = {
    menuItemStatusId: number;
    menuItemStatusDesc: string;
}