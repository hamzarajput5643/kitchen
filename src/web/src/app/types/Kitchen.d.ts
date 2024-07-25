import { DateTime } from "luxon";

export type CuisineType = {
    cuisineTypeId: number;
    cuisineTypeName: string;
    menuItem?: MenuItem[];
    menuItem1?: MenuItem[];
    menuItem2?: MenuItem[];
}

export type Ingredient = {
    ingredientId: number;
    ingredientName: string;
    ingredientCategoryId: number;
    isGlutenFree: boolean;
    isDairyFree: boolean;
    isVegetarian: boolean;
    isVegan: boolean;
    isNutFree: boolean;
    isOrganic: boolean;

    menuItemIngredients?: MenuItemIngredients[];
}

export type ItemStatus = {
    menuItemStatusId: number;
    menuItemStatusDesc: string;
    menuItem?: MenuItem[];
}

export type ItemType = {
    menuItemTypeId: number;
    menuItemTypeName: string;
    menuItem?: MenuItem[];
}

export type MainIngredient = {
    mainIngredientId: number;
    mainIngredientName: string;
    menuItem?: MenuItem[];
}

export type MenuItem = {
    menuItemId: number;
    kitchenId: number;
    dateCreated: DateTime;
    menuItemTitle: string;
    isArchived: boolean;
    menuItemTypeId?: number;
    mainIngredientId?: number;
    vegetarian: boolean;
    spicyMeter: number;
    itemDetails: string;
    viewCount: number;
    orderCount: number;
    currentStatusId: number;
    allOrganic: boolean;
    partiallyOrganic: boolean;
    allergenFree: boolean;
    nonVegetarian: boolean;
    containsEggs: boolean;
    containsWheat: boolean;
    containsGluten: boolean;
    containsDairy: boolean;
    containsPeanuts: boolean;
    containsTreeNuts: boolean;
    containsShellfish: boolean;
    containsSoy: boolean;
    highProtein: boolean;
    lowFat: boolean;
    lowCarb: boolean;
    lowCalorie: boolean;
    paleo: boolean;
    vegan: boolean;
    pescatarian: boolean;
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    dessert: boolean;
    cuisineId1?: number;
    cuisineId2?: number;
    cuisineId3?: number;
    recipeDetails: string;
    tags: string;

    cuisineType?: CuisineType;
    cuisineType1?: CuisineType;
    cuisineType2?: CuisineType;
    itemStatus?: ItemStatus;
    itemType?: ItemType;
    mainIngredient?: MainIngredient;
    menuItemIngredients?: MenuItemIngredients[];
    product?: Product[];
    menuItemReview?: MenuItemReview[];
    menuItemPhoto?: MenuItemPhoto[];
    kitchen?: Kitchen;
    userMessage?: UserMessage[];
}

export type MenuItemIngredients = {
    pkId: number;
    menuItemId: number;
    ingredientId: number;

    ingredient?: Ingredient;
    menuItem?: MenuItem;
}

export type Product = {
    productId: number;
    kitchenId?: number;
    menuItemId?: number;
    dateAdded: Date;
    availableStartDate: Date;
    availableStartTime: Date;
    availableEndDate: Date;
    availableEndTime: Date;
    availableQuantity: number;
    vehicleId?: number;
    deliveryAvailable: boolean;
    pickupAvailable: boolean;
    addressId?: number;
    showExactLocation: boolean;
    orderCutoffDate: Date;
    orderCutoffTime: Date;
    deliveryPickupNotes: string;
    maxDeliveryDistance?: number;
    activeFlag: boolean;
    portionDesc: string;
    price?: number;
    deliveryFee?: number;
    distanceFromUser: number;

    menuItem?: MenuItem;
    userAddress?: UserAddress;
    productOrder?: ProductOrder[];
    kitchen?: Kitchen;
    userMessage?: UserMessage[];
}