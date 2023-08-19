import React from 'react';
import {Button, Offcanvas} from 'react-bootstrap';

interface ProfileOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ProfileOffcanvas: React.FC<ProfileOffcanvasProps> = ({ show, onHide }) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };


    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Profile Information</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Button onClick={handleLogout}>Logout</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ProfileOffcanvas;