import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './ModalSearch.css'; // Import custom CSS file
import { FaTimes, FaSearch } from 'react-icons/fa'; // Import icons from react-icons

const ModalSearch: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span className="search-icon" onClick={handleShow}>
                <FaSearch size={24} />
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modal-search"
                aria-labelledby="modalSearchTitle"
                centered
                backdrop="static"
                animation={false} // Custom animation for the modal
            >
                <div className="modal-body-wrapper">
                    <Button variant="link" className="close-btn" onClick={handleClose}>
                        <FaTimes size={24} />
                    </Button>
                    <Form method="get" className="search-form">
                        <Form.Control type="text" placeholder="Search..." className="search-input" />
                        {/* <Button type="submit" variant="link" className="search-submit">
                            <FaSearch size={20} />
                        </Button> */}
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default ModalSearch;