import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserOrders } from "@app/services/queries";
import DataTable from "react-data-table-component";
import { ContentHeader } from "../../components";
import { ProductOrder } from "../../app/types/Orders";

const CustomerOrdersTable: React.FC = () => {
    const [status, setStatus] = useState<number>(2);
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const userOrdersQuery = useUserOrders(status, currentPage, itemsPerPage);

    useEffect(() => {
        userOrdersQuery.refetch();
    }, [status, currentPage, itemsPerPage, search]);

    const filteredData = Array.isArray(userOrdersQuery.data)
        ? userOrdersQuery.data.filter(order =>
            Object.values(order).some(value =>
                typeof value === "string" &&
                value.toLowerCase().includes(search.toLowerCase())
            )
        )
        : [];

    const columns: TableColumn<ProductOrder>[] = [
        {
            name: "Order Number",
            selector: (row: ProductOrder) => row.ProductOrderId,
        },
        {
            name: "Buyer Name",
            selector: (row: ProductOrder) => row.UserName,
        },
        {
            name: "Date Created",
            selector: (row: ProductOrder) => (
                <>
                    {new Date(row.OrderDate).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}<br />
                    {new Date(row.OrderDate).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}
                </>
            ),
        },
        {
            name: "Product Name",
            selector: (row: ProductOrder) => row.MenuItemTitle,
        },
        {
            name: "Item Quantity",
            selector: (row: ProductOrder) => row.ProductQuantity,
            cell: (row: ProductOrder) => <div style={{ textAlign: 'right' }}>{row.ProductQuantity}</div>,
        },
        {
            name: "Item Price",
            selector: (row: ProductOrder) => row.ProductPrice,
            cell: (row: ProductOrder) => <div style={{ textAlign: 'right' }}>{row.ProductPrice}</div>,
        },
        {
            name: "Order Price",
            selector: (row: ProductOrder) => row.ProductExtPrice,
            cell: (row: ProductOrder) => <div style={{ textAlign: 'right' }}>{row.ProductExtPrice}</div>,
        },
        {
            name: "Current Status",
            selector: (row: ProductOrder) => row.OrderStatusDesc,
        },
        {
            name: "Actions",
            cell: (row: ProductOrder) => (
                <div className="action-icons">
                    {row.OrderApproved && <i className="fa fa-check" style={{ color: 'green' }} title="Approved"></i>}
                    {!row.OrderApproved && <i className="fa fa-bell" style={{ color: 'red' }} title="Awaiting Approval"></i>}
                    {row.OrderCancelledFlag && <i className="fa fa-times" style={{ color: 'red' }}></i>}
                    {row.OrderInvoicedTimestamp && <i className="fa fa-calculator" style={{ color: 'green' }}></i>}
                    {row.OrderPaid && <i className="fa fa-usd" style={{ color: 'green' }}></i>}
                    {row.OrderReady && <i className="fa fa-cutlery" style={{ color: 'green' }}></i>}
                    {row.OrderReviewed && <i className="fa fa-comment" style={{ color: 'green' }}></i>}
                    <Link to={`/order/manage/${row.ProductOrderId}`} title="Manage Order">
                        <i className="fa fa-dashboard" style={{ color: 'green' }}></i>
                    </Link>
                </div>
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

    return (
        <>
            <ContentHeader title="Orders" body="User Orders" />

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid orders-box">
                            <div className="table-responsive">
                                <DataTable
                                    columns={columns}
                                    data={filteredData}
                                    className="table table-bordered table-striped"
                                    pagination
                                    paginationServer
                                    paginationPerPage={itemsPerPage}
                                    paginationRowsPerPageOptions={[10, 15, 20]}
                                    onChangePage={(page, totalRows) => {
                                        setCurrentPage(page);
                                    }}
                                    onChangeRowsPerPage={handlePerPageChange}
                                    selectableRows
                                    fixedHeader
                                    selectableRowsHighlight
                                    highlightOnHover
                                    subHeader
                                    subHeaderComponent={
                                        <>
                                            <div className="col-md-3 search">
                                                <input
                                                    type="text"
                                                    placeholder="Search ...."
                                                    className="form-control custom-search"
                                                    value={search}
                                                    onChange={(e) => handleSearch(e.target.value)}
                                                />
                                            </div>
                                            {/*<div className="col-md-1">*/}
                                            {/*    <Link to="/menu/new-item" className="btn btn-secondary btn-sm" style={{ marginBottom: "0 !important" }}>Add New</Link>*/}
                                            {/*</div>*/}
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CustomerOrdersTable;