import './Header.css'
import gemoraLogo from '../../assets/Gemorasmall.jpg';

import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas, FormControl } from 'react-bootstrap';
import SearchButton from "../buttons/SearchButton";
import CartButton from "../buttons/CartButton";
import ProfileButton from "../buttons/ProfileButton";

const Header: React.FC = () => {
    const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <div className="header-bg py-3">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} sm={4} className="text-center">

                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <img src={gemoraLogo} alt="Gemora logo" width="50%" height="50%" />
                        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="top">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Enter your search term</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <FormControl type="text" placeholder="Search product..." />
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <div className="container mt-4">
                            <SearchButton handleShow={handleShow} />
                            <ProfileButton />
                            <CartButton itemCount={0} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;

