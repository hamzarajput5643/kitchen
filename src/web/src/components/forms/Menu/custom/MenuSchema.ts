import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, MAX_FILE_UPLOAD } from "@app/utils/constants";
import { z } from "zod";

export const validationSchema = z.object({
    title: z.string().min(1, 'Name is Required!'),
    typeId: z.string().min(1, 'Type is Required!'),
    details: z.string().min(1, 'Description is Required!'),
    files: z.array(z.instanceof(File)).min(1, 'At least one image is required')
        .max(MAX_FILE_UPLOAD, 'A maximum of 10 images is allowed')
        .refine(
            (files) => files.every((file) => file.size <= MAX_FILE_SIZE && ACCEPTED_IMAGE_TYPES.includes(file.type)),
            {
                message: "Item photo: Only .png and .jpg files of 3MB or less are accepted",
            }
        ),
    mainIngredient: z.string().optional(),
    cuisineId0: z.string().optional(),
    cuisineId1: z.string().optional(),
    cuisineId2: z.string().optional(),
    mealType: z.number().optional(),
    peanuts: z.boolean().optional(),
    eggs: z.boolean().optional(),
    treenuts: z.boolean().optional(),
    dairy: z.boolean().optional(),
    wheat: z.boolean().optional(),
    gluten: z.boolean().optional(),
    soy: z.boolean().optional(),
    shellfish: z.boolean().optional(),
    allergenFree: z.boolean().optional(),
    highProtein: z.boolean().optional(),
    lowFat: z.boolean().optional(),
    lowCarb: z.boolean().optional(),
    lowCal: z.boolean().optional(),
    paleo: z.boolean().optional(),
    breakfast: z.boolean().optional(),
    lunch: z.boolean().optional(),
    dinner: z.boolean().optional(),
    dessert: z.boolean().optional(),
    spicyMeter: z.number().optional().nullable(),
    organic: z.number().optional().nullable(),
    vegRadio: z.number().optional().nullable(),
    ingredient: z.array(z.string().optional()).optional(),
    tags: z.array(z.string().optional()).optional(),
});