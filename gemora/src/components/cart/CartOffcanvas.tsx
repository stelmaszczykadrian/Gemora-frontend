import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';

interface CartOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const CartOffcanvas: React.FC<CartOffcanvasProps> = ({ show, onHide }) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart items:</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    <div>Test 1</div>
                    <div className="ms-auto fw-bold fs-5">
                        Total Test
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffcanvas;