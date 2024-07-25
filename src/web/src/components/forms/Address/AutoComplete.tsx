import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { FaUser } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { Controller, FieldErrors } from "react-hook-form";
import { AddressFormValues } from "@app/app/types/Address";
import "@reach/combobox/styles.css";

// Constants
const center = { lat: 43.6532, lng: -79.3832 };
const libraries: Array<'places'> = ['places'];

interface AutoCompleteAddressProps {
    checked: { useDefault: boolean; useBilling: boolean };
    control: any;
    isSubmitting: boolean;
    handleCheckboxChange: (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddressSelect: (addressDetails: AddressDetails) => void;
    errors: FieldErrors<AddressFormValues>
}

interface AddressDetails {
    streetNumber: string;
    route: string;
    locality: string;
    stateCode: string;
    zipCode: string;
    country: string;
    lat: number;
    lng: number;
}

const AutoCompleteAddress: React.FC<AutoCompleteAddressProps> = ({
    checked, control, isSubmitting, handleCheckboxChange, onAddressSelect, errors
}) => {

    const googleMapsApiKey = "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk";

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey,
        libraries,
    });

    if (loadError) return <div>Error loading map</div>;
    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <div className="col-md-4 form-group">
                <Search onAddressSelect={onAddressSelect} />
                {errors.NewAddress && <p className="error">{errors.NewAddress.message}</p>}
            </div>
            <div className="col-md-3 form-group">
                <ul className="list-unstyled list-inline">
                    <CheckboxController
                        checked={checked.useDefault}
                        control={control}
                        name="useDefault"
                        onChange={handleCheckboxChange('useDefault')}
                        icon={<FaUser />}
                    />
                    <CheckboxController
                        checked={checked.useBilling}
                        control={control}
                        name="useBilling"
                        onChange={handleCheckboxChange('useBilling')}
                        icon={<IoCardOutline />}
                    />
                    <li className="list-inline-item">
                        <button type="submit" className="btn btn-success" style={{ marginBottom: "0px !important" }} disabled={isSubmitting}>
                            {isSubmitting ? <span className="spinner-border spinner-border-sm"></span> : 'Add'}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

interface CheckboxControllerProps {
    checked: boolean;
    control: any;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: React.ReactNode;
}

const CheckboxController: React.FC<CheckboxControllerProps> = ({ checked, control, name, onChange, icon }) => (
    <li className="list-inline-item">
        <label className={`btn ${checked ? 'btn-primary' : 'btn-secondary'}`} htmlFor={name}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange: fieldOnChange, onBlur, value, ref } }) => (
                    <>
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={e => {
                                fieldOnChange(e.target.checked);
                                onChange(e);
                            }}
                            onBlur={onBlur}
                            ref={ref}
                            id={name}
                            className="hidden"
                        />
                        {icon}
                    </>
                )}
            />
        </label>
    </li>
);

const Search: React.FC<{ onAddressSelect: (addressDetails: AddressDetails) => void }> = ({ onAddressSelect }) => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: new google.maps.LatLng(center.lat, center.lng),
            radius: 100 * 1000,
        }
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);

            const addressComponents = results[0].address_components;

            const addressDetails: AddressDetails = {
                streetNumber: addressComponents.find(comp => comp.types.includes("street_number"))?.long_name || "N/A",
                route: addressComponents.find(comp => comp.types.includes("route"))?.long_name || "N/A",
                locality: addressComponents.find(comp => comp.types.includes("locality"))?.long_name || "N/A",
                stateCode: addressComponents.find(comp => comp.types.includes("administrative_area_level_1"))?.short_name || "N/A",
                zipCode: addressComponents.find(comp => comp.types.includes("postal_code"))?.long_name || "N/A",
                country: addressComponents.find(comp => comp.types.includes("country"))?.long_name || "N/A",
                lat,
                lng
            };

            onAddressSelect(addressDetails);
        } catch (error) {
            console.error("Error fetching address details:", error);
        }
    };

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Search your location"
                className="form-control"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map((suggestion, index) => (
                        <ComboboxOption key={index} value={suggestion.description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default AutoCompleteAddress;