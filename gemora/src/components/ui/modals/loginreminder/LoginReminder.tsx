import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

interface LoginReminderModalProps {
    isOpen: boolean;
    handleCancel: () => void;
}

const LoginReminderModal: React.FC<LoginReminderModalProps> = (props) => {
    return (
        <Modal show={props.isOpen} onHide={props.handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Login Required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Sorry, in order to make a purchase, please sign in to your account.</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to="/login">
                    <Button variant="danger">
                        Sign In
                    </Button>
                </Link>
                <Button variant="secondary" onClick={props.handleCancel}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginReminderModal;