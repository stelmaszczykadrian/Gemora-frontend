import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar: React.FC = () => {

    return (
        <div className="navbar-bg">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">
                                <button className="accordion-button">Home</button>
                            </Nav.Link>
                            <Nav.Link href="/store">
                                <button className="accordion-button">Products</button>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <button className="accordion-button">Engagement</button>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <button className="accordion-button">Earrings</button>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <button className="accordion-button">Necklaces</button>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <button className="accordion-button">Rings</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;