export type Vehicle = {
    colorName: string;
    vehicleYear: number,
    makeName: string,
    modelName: string,
    primaryVehicleFlag: boolean,
    id: number
}

export type VehicleFormValues = {
    VehicleMakeId: string;
    VehicleModelId: string;
    VehicleYear: number;
    VehicleColorId: string;
    VehicleStateCode: string;
    VehiclePlateNumber: string;
    PrimaryVehicleFlag?: boolean;
};