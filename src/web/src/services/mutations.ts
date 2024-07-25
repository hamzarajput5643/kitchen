import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMenuItem, addUserAddress, addUserVehicle, updateAccountSettings, updateKitchenSettings } from "./api";

export const updateKitchenMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateKitchenSettings,
        onSuccess: () => {
            console.log('success');
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ['user-menu-items'] });
            }
        }
    })
}

export const updateAccountMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateAccountSettings,
        onSuccess: () => {
            console.log('success');
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ['account-settings'] });
            }
        }
    })
}

export const addVehicleMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addUserVehicle,
        onSuccess: () => {
            console.log('success');
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ['user-vehicles'] });
            }
        }
    })
}

export const addAddressMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addUserAddress,
        onSuccess: () => {
            console.log('success');
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ['user-address'] });
            }
        }
    })
}

export const addMenuMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addMenuItem,
        onSuccess: () => {
            console.log('success');
        },
        onSettled: async (_, error) => {
            if (error) {
                console.error(error);
            } else {
                await queryClient.invalidateQueries({ queryKey: ['items'] });
            }
        }
    })
}