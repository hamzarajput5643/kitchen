import React, { useEffect, useState } from "react";
import { useUserMenuItems } from "@app/services/queries";
import DataTable from "react-data-table-component";
import { ContentHeader } from "@app/components";
import { Link } from "react-router-dom";
import './Table.scss';
import { MenuItem } from "../../app/types/Menu";
import { Button, Modal } from "react-bootstrap";
import MenuImage from "@app/components/forms/Menu/MenuImage";

const MenuItems: React.FC = () => {
    const [status, setStatus] = useState<number>(2);
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const menuItemQuery = useUserMenuItems(status, currentPage, itemsPerPage);

    useEffect(() => {
        menuItemQuery.refetch();
    }, [status, currentPage, itemsPerPage, search]);

    const filteredData = menuItemQuery.data?.data.menuItems.filter(order =>
        Object.values(order).some(value =>
            typeof value === "string" &&
            value.toLowerCase().includes(search.toLowerCase())
        )
    ) || [];

    const showImage = (menuItemId: number) => {
        setSelectedItemId(menuItemId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItemId(null);
    };

    const columns: TableColumn<MenuItem>[] = [
        {
            name: "",
            selector: (row: MenuItem) => (
                <Button
                    onClick={() => showImage(row.menuItemId)}
                    className="custom-btn"
                    title="View"
                >
                    View Images
                </Button>
            ),
        },
        {
            name: "Title",
            selector: (row: MenuItem) => (
                <Link to={`/menu/item-details/${row.menuItemId}`}>{row.menuItemTitle}</Link>
            )
        },
        {
            name: "Date Created",
            selector: (row: MenuItem) => (
                <>
                    {new Date(row.dateCreated).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}<br />
                    {new Date(row.dateCreated).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })}
                </>
            )
        },
        {
            name: "Status",
            selector: (row: MenuItem) => (
                <>{row.menuItemStatusDesc}</>
            )
        },
        {
            name: "Action",
            cell: (row: MenuItem) => (
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-3">
                            <Link to={`/menu-item/details/${row.menuItemId}`} className="btn btn-info btn-sm" title="View Item">
                                <i className="fa fa-eye"></i>
                            </Link>
                        </div>
                        <div className="col-sm-3">
                            <Link to={`/menu-item/edit/${row.menuItemId}`} className="btn btn-warning btn-sm" title="Edit Item">
                                <i className="fa fa-edit"></i>
                            </Link>
                        </div>
                        {row.productCount === 0 ? (
                            <div className="col-sm-3">
                                <Link to={`/product/new/${row.menuItemId}`} className="btn btn-primary btn-sm" style={{ padding: "4px 12px" }} title="Post for Sale">
                                    <i className="fa fa-dollar-sign"></i>
                                </Link>
                            </div>
                        ) : (
                            <div className="col-sm-3">
                                <Link to={`/admin/orders`} className="" title="View Orders">
                                    <i className="fa fa-credit-card" style={{ color: 'red' }}></i>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
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
            <ContentHeader title="Menu" body="Menu Items" />

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid AccountSettings-box">
                            <div className="table-responsive">
                                <DataTable
                                    columns={columns}
                                    data={filteredData}
                                    className="table table-bordered table-stripped"
                                    pagination
                                    paginationServer
                                    paginationPerPage={itemsPerPage}
                                    paginationRowsPerPageOptions={[10, 15, 20, 50, 100]}
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
                                            <div className="col-md-1">
                                                <Link to="/admin/menu/new-item" className="btn btn-secondary btn-sm" style={{ marginBottom: "0 !important" }}>Add New</Link>
                                            </div>
                                        </>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
                <Modal.Body>
                    {selectedItemId && <MenuImage menuItemId={selectedItemId} />}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MenuItems;