export const MAX_FILE_UPLOAD = 5;
export const MAX_FILE_SIZE = 3 * 1024 * 1024;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png'];

export const menuItemTypes: RadioOption[] = [
    { label: 'Non-Vegetarian', value: 0 },
    { label: 'Pescatarian', value: 1 },
    { label: 'Vegetarian', value: 2 },
    { label: 'Vegan', value: 3 },
];

export const organicOptions: RadioOption[] = [
    { label: 'Not Organic', value: 0 },
    { label: 'Some Organic Ingredients', value: 1 },
    { label: 'All Organic', value: 2 },
];

export const spicinessLevels: RadioOption[] = [
    { label: 'Not At All Spicy', value: 0 },
    { label: 'Mild', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Hot', value: 3 },
    { label: 'Very Hot', value: 4 },
    { label: 'Extremely Hot', value: 5 }
];

export const dietTypes: CheckboxOption[] = [
    { label: 'HighProtein', name: 'highProtein' },
    { label: 'LowFat', name: 'lowFat' },
    { label: 'LowCarb', name: 'lowCarb' },
    { label: 'LowCalorie', name: 'lowCal' },
    { label: 'Paleo', name: 'paleo' },
];

export const mealTypes: CheckboxOption[] = [
    { label: 'Breakfast', name: 'breakfast' },
    { label: 'Lunch', name: 'lunch' },
    { label: 'Dinner', name: 'dinner' },
    { label: 'Dessert', name: 'dessert' },
];

export const allergens: CheckboxOption[] = [
    { label: 'Peanuts', name: 'peanuts' },
    { label: 'Eggs', name: 'eggs' },
    { label: 'Tree Nuts', name: 'treenuts' },
    { label: 'Dairy', name: 'dairy' },
    { label: 'Wheat', name: 'wheat' },
    { label: 'Gluten', name: 'gluten' },
    { label: 'Soy', name: 'soy' },
    { label: 'Shellfish', name: 'shellfish' },
];

export const capitalizeName = (userName: string) => {
    const name = userName.includes('@') ? userName.split('@')[0] : userName;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};