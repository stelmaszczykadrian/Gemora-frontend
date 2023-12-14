import './Header.css'
import gemoraLogo from '../../../assets/GemoraLogo.jpg';

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SearchButton from "../../buttons/searchbutton/SearchButton";
import CartButton from "../../buttons/cartbutton/CartButton";
import AccountButton from "../../buttons/accountbutton/AccountButton";
import ShoppingCart from "../../cart/shoppingcart/ShoppingCart";
import SearchOffcanvas from "../../search/SearchOffcanvas";
import ProfileOffcanvas from "../../profile/profileoffcanvas/ProfileOffcanvas";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const [showSearchOffcanvas, setShowSearchOffcanvas] = useState<boolean>(false);
    const handleShowSearchOffcanvas = () => setShowSearchOffcanvas(true);
    const handleCloseSearchOffcanvas = () => setShowSearchOffcanvas(false);

    const [showCartOffcanvas, setShowCartOffcanvas] = useState<boolean>(false);
    const handleShowCartOffcanvas = () => setShowCartOffcanvas(true);
    const handleCloseCartOffcanvas = () => setShowCartOffcanvas(false);


    const [showProfileOffcanvas, setShowProfileOffcanvas] = useState<boolean>(false);
    const handleShowProfileOffcanvas = () => setShowProfileOffcanvas(true);
    const handleCloseProfileOffcanvas = () => setShowProfileOffcanvas(false);

    return (
        <div className="header-bg py-3">
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} sm={4} className="text-center">

                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <Link to="/">
                            <img src={gemoraLogo} alt="Gemora logo" width="50%" height="50%"/>
                        </Link>
                        <SearchOffcanvas show={showSearchOffcanvas} onHide={handleCloseSearchOffcanvas}/>
                    </Col>
                    <Col xs={12} sm={4} className="text-center">
                        <div className="container mt-4">
                            <SearchButton handleShow={handleShowSearchOffcanvas}/>
                            <AccountButton handleShow={handleShowProfileOffcanvas}/>
                            <CartButton handleShow={handleShowCartOffcanvas}/>
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

