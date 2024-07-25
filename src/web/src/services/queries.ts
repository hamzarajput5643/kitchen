import { useQuery } from "@tanstack/react-query";
import { AccountSettings, KitchenSettings } from "@app/app/types/Settings";
import { ProductOrder } from "../app/types/Orders";
import { UserMenuItem } from "@app/app/types/User";
import { ImageResponse, Response } from "@app/app/interfaces/Response";
import { Vehicle } from "@app/app/types/Vehicle";
import { Address } from "@app/app/types/Address";
import { getAccountSettings, getCuisineTypes, getIngredients, getKitchenImages, getKitchenSettings, getMainIngredients, getMenuTypes, getUserAddresses, getUserMenuItems, getUserOrders, getUserVehicles } from "./api";
import { MembershipType } from "@app/app/interfaces/MembershipType";
import { getMembershipTypes } from "./api/memberApi";

export function useUserMenuItems(status: number, page: number = 1, pageSize: number = 10) {
    return useQuery<UserMenuItem, Error>({
        queryKey: ['user-menu-items', status, page, pageSize],
        queryFn: () => getUserMenuItems(status, page, pageSize)
    });
}

export function useKitchenSettings() {
    return useQuery<Response<KitchenSettings>, Error>({
        queryKey: ['kitchen-settings'],
        queryFn: getKitchenSettings
    });
}

export function useKitchenImages(kitchenId: number, options?: { skip?: boolean }) {
    return useQuery<ImageResponse[], Error>({
        queryKey: ['kitchen-images', kitchenId],
        queryFn: () => getKitchenImages(kitchenId),
        enabled: !options?.skip
    });
}

export function useUserOrders(id: number | null, page: number = 1, pageSize: number = 10) {
    return useQuery<ProductOrder[], Error>({
        queryKey: ['user-orders', id, page, pageSize],
        queryFn: () => getUserOrders(id, page, pageSize)
    });
}

export function useAccountSettings() {
    return useQuery<Response<AccountSettings>, Error>({
        queryKey: ['account-settings'],
        queryFn: getAccountSettings
    });
}

export function useUserVehicles(page: number = 1, pageSize: number = 10) {
    return useQuery<Response<Vehicle[]>, Error>({
        queryKey: ['user-vehicles', page, pageSize],
        queryFn: () => getUserVehicles(page, pageSize)
    });
}

export function useUserAddresses(page: number = 1, pageSize: number = 10) {
    return useQuery<Response<Address[]>, Error>({
        queryKey: ['user-address', page, pageSize],
        queryFn: () => getUserAddresses(page, pageSize)
    });
}

export function useCuisineTypes(options?: { skip?: boolean }) {
    return useQuery<SelectListOption[], Error>({
        queryKey: ['cuisine-types'],
        queryFn: () => getCuisineTypes(),
        enabled: !options?.skip
    });
}

export function useMenuTypes(options?: { skip?: boolean }) {
    return useQuery<SelectListOption[], Error>({
        queryKey: ['menu-types'],
        queryFn: () => getMenuTypes(),
        enabled: !options?.skip
    });
}

export function useMainIngredients(options?: { skip?: boolean }) {
    return useQuery<SelectListOption[], Error>({
        queryKey: ['main-ingredients'],
        queryFn: () => getMainIngredients(),
        enabled: !options?.skip
    });
}

export function useIngredients(options?: { skip?: boolean }) {
    return useQuery<SelectListOption[], Error>({
        queryKey: ['ingredients'],
        queryFn: () => getIngredients(),
        enabled: !options?.skip
    });
}

export function useMembershipTypes(options?: { skip?: boolean }) {
    return useQuery<MembershipType[], Error>({
        queryKey: ['ingredients'],
        queryFn: () => getMembershipTypes(),
        enabled: !options?.skip
    });
}

//export function useMultipleKitchenPics(kitchenId: number, types: string[]) {
//    return useQueries({
//        queries: types.map(type => ({
//            queryKey: ['kitchen-pics', kitchenId, type],
//            queryFn: () => getKitchenPics(kitchenId, type),
//        })),
//    });
//}