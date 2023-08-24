import './Header.css'
import gemoraLogo from '../../assets/GemoraLogo.jpg';

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import ProfileButton from "./ProfileButton";
import ShoppingCart from "../cart/ShoppingCart";
import SearchOffcanvas from "../search/SearchOffcanvas";
import ProfileOffcanvas from "../profile/ProfileOffcanvas";

const Header: React.FC = () => {
    const [showSearchOffcanvas, setShowSearchOffcanvas] = useState<boolean>(false);

    const handleCloseSearchOffcanvas = () => setShowSearchOffcanvas(false);
    const handleShowSearchOffcanvas = () => setShowSearchOffcanvas(true);

    const [showCartOffcanvas, setShowCartOffcanvas] = useState<boolean>(false);

    const handleCloseCartOffcanvas = () => setShowCartOffcanvas(false);
    const handleShowCartOffcanvas = () => setShowCartOffcanvas(true);

    const [showProfileOffcanvas, setShowProfileOffcanvas] = useState<boolean>(false);

    const handleCloseProfileOffcanvas = () => setShowProfileOffcanvas(false);
    const handleShowProfileOffcanvas = () => setShowProfileOffcanvas(true);


    return (
        <div className="header-bg py-3">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} sm={4} className="text-center">

                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <img src={gemoraLogo} alt="Gemora logo" width="50%" height="50%"/>
                        <SearchOffcanvas show={showSearchOffcanvas} onHide={handleCloseSearchOffcanvas}/>
                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <div className="container mt-4">
                            <SearchButton handleShow={handleShowSearchOffcanvas}/>
                            <ProfileButton handleShow={handleShowProfileOffcanvas}/>
                            <CartButton handleShow={handleShowCartOffcanvas} itemCount={0}/>
                            <ShoppingCart show={showCartOffcanvas} onHide={handleCloseCartOffcanvas}/>
                            <ProfileOffcanvas show={showProfileOffcanvas} onHide={handleCloseProfileOffcanvas}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;

