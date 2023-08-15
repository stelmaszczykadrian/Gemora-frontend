import React, { useState } from 'react';
import { Offcanvas, FormControl } from 'react-bootstrap';

interface SearchOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const SearchOffcanvas: React.FC<SearchOffcanvasProps> = ({ show, onHide }) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="top">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Enter your search term</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <FormControl type="text" placeholder="Search product..." />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SearchOffcanvas;