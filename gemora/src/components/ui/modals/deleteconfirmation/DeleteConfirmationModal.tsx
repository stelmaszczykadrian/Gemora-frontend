import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    handleConfirm: () => void;
    handleCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = (props) => {
    return (
        <Modal show={props.isOpen} onHide={props.handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this product?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.handleConfirm}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={props.handleCancel}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmationModal;
