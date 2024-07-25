import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import './Table.scss';
import { useUserVehicles } from '../../services/queries';
import { Vehicle } from '../../app/types/Vehicle';
import { ContentHeader } from '../../components';
import { toast } from 'react-toastify';
import { delUserVehicle, makeVehiclePrimary } from '@app/services/api';
import VehicleForm from '@app/components/forms/Vhicles/VehicleForm';

const Vehicles: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);

    const vehiclesQuery = useUserVehicles(currentPage, itemsPerPage);

    useEffect(() => {
        vehiclesQuery.refetch();
    }, [currentPage, itemsPerPage, search]);

    const filteredData = (Array.isArray(vehiclesQuery.data?.data) ? vehiclesQuery.data?.data : []).filter(vehicle =>
        Object.values(vehicle).some(value =>
            typeof value === "string" &&
            value.toLowerCase().includes(search.toLowerCase())
        )
    );

    const columns: TableColumn<Vehicle>[] = [
        {
            name: 'Color',
            selector: row => row.colorName,
        },
        {
            name: 'Year',
            selector: row => row.vehicleYear,
        },
        {
            name: 'Make',
            selector: row => row.makeName,
        },
        {
            name: 'Model',
            selector: row => row.modelName,
        },
        {
            name: 'Primary',
            cell: row => (
                row.primaryVehicleFlag ? <i className="fa fa-check"></i> : null
            ),
        },
        {
            name: 'Actions',
            cell: row => (
                <div className='col-md-12'>
                    <button onClick={() => handleUpdate(row.id)} className="btn btn-sm btn-secondary">Make Primary</button>
                    &nbsp;&nbsp;
                    <button
                        className="btn btn-sm btn-danger"
                        style={{ verticalAlign: 'baseline !important' }}
                        onClick={() => handleDelete(row.id)}
                    >
                        Delete
                    </button>
                </div>
            )
        }
    ];

    const handleUpdate = async (vehicleId: number) => {
        if (window.confirm("Are you sure you want to make this vehicle as a primary?")) {
            try {
                const response = await makeVehiclePrimary(vehicleId);
                if (response.isSucceed) {
                    vehiclesQuery.refetch();
                    toast.success('Vehicle updated successfully');
                } else {
                    toast.error('Error updating vehicle');
                }
            } catch (error) {
                toast.error('Error updating vehicle');
            }
        }
    };

    const handleDelete = async (vehicleId: number) => {
        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            try {
                const response = await delUserVehicle(vehicleId);
                if (response.isSucceed) {
                    vehiclesQuery.refetch();
                    toast.success('Vehicle Deleted Successfully');
                } else {
                    toast.error('Error deleting vehicle');
                }
            } catch (error) {
                toast.error('Error deleting vehicle');
            }
        }
    };

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    const handlePerPageChange = (newPerPage: number) => {
        setItemsPerPage(newPerPage);
        setCurrentPage(1);
    };

    return (
        <>
            <ContentHeader title="Vehicles" body="Vehicles List" />

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid AccountSettings-box">
                            <div className="table-responsive">
                                <DataTable
                                    columns={columns}
                                    data={filteredData}
                                    className="table table-bordered table-striped"
                                    pagination
                                    paginationServer
                                    paginationPerPage={itemsPerPage}
                                    paginationRowsPerPageOptions={[10, 15, 20, 50, 100]}
                                    onChangePage={page => setCurrentPage(page)}
                                    onChangeRowsPerPage={handlePerPageChange}
                                    subHeader
                                    subHeaderComponent={
                                        <div className="col-md-3 search">
                                            <input
                                                type="text"
                                                placeholder="Search ...."
                                                className="form-control custom-search"
                                                value={search}
                                                onChange={(e) => handleSearch(e.target.value)}
                                            />
                                        </div>
                                    }
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <VehicleForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vehicles;