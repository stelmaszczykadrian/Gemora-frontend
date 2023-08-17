import React from 'react';
import {Offcanvas} from 'react-bootstrap';

interface ProfileOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ProfileOffcanvas: React.FC<ProfileOffcanvasProps> = ({ show, onHide }) => {

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Profile Information</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Test
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ProfileOffcanvas;