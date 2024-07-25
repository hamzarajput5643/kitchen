import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import './Table.scss';
import { ContentHeader } from '@app/components';
import { Address } from '@app/app/types/Address';
import { useUserAddresses } from '@app/services/queries';
import { toast } from 'react-toastify';
import { delUserAddress, makeAddressBilling } from '@app/services/api';
import AddressForm from '@app/components/forms/Address/AddressForm';

const AddressBook: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const addressQuery = useUserAddresses(currentPage, itemsPerPage);

  useEffect(() => {
    addressQuery.refetch();
  }, [currentPage, itemsPerPage, search]);

  const filteredData = (Array.isArray(addressQuery.data?.data) ? addressQuery.data?.data : []).filter(address =>
    Object.values(address).some(value =>
      typeof value === "string" &&
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns: TableColumn<Address>[] = [
    {
      name: 'Address',
      selector: row => row.fullGoogleAddress,
    },
    {
      name: 'Primary',
      cell: row => (
        row.defaultFlag ? <i className="fa fa-check"></i> : null
      ),
    },
    {
      name: 'Billing',
      cell: row => (
        row.billingAddress ? <i className="fa fa-credit-card" aria-hidden="true" title="Billing Address" id="billingAddress"></i> : null
      ),
    },
    {
      name: '',
      cell: row => (
        row.addressId ? <button onClick={() => handleBilling(row.addressId)} className="btn btn-sm btn-secondary">Use as Billing</button> : null
      ),
    },
    {
      name: '',
      cell: row => (
        row.addressId ? <button onClick={() => handleDelete(row.addressId)} className="btn btn-sm btn-danger">Delete</button> : ''
      ),
    },
  ];

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(1);
  };

  const handleBilling = async (addressId: number) => {
    if (window.confirm("Are you sure you want to use as billing?")) {
      try {
        const response = await makeAddressBilling(addressId);
        if (response.isSucceed) {
          addressQuery.refetch();
          toast.success('Address set as a billing successfully');
        } else {
          toast.error('Error making as billing');
        }
      } catch (error) {
        toast.error('Error making as billing');
      }
    }
  };

  const handleDelete = async (addressId: number) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        const response = await delUserAddress(addressId);
        if (response.isSucceed) {
          addressQuery.refetch();
          toast.success('Address Deleted Successfully');
        } else {
          toast.error('Error deleting Address');
        }
      } catch (error) {
        toast.error('Error deleting Address');
      }
    }
  };

  return (
    <>
      <ContentHeader title="Address" body="Address Book" />

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
                  <AddressForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddressBook;