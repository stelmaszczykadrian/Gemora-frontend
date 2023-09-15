import React, {useContext} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import CartContext from "../../context/CartContext";

interface ProfileOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ProfileOffcanvas: React.FC<ProfileOffcanvasProps> = ({ show, onHide }) => {

    const {clearCart} = useContext(CartContext);

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
                <Button onClick={clearCart}>Czyść Koszyk</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ProfileOffcanvas;