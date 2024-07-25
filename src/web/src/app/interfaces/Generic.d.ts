interface SelectListOption {
    text: string;
    value: string;
}

interface SelectList<T> {
    items: T[];
    selectedValue: T;
}

interface DataTableResponse {
    draw: number;
    recordsTotal: number;
    recordsFiltered: number;
    data: T[];
}
interface TableColumn<T> {
    name: string;
    selector?: (row: T) => any;
    cell?: (row: T) => React.ReactNode;
}

interface RadioOption {
    label: string;
    value: number;
}

interface CheckboxOption {
    label: string;
    name: string;
}