import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './Navbar.css';

const menuItems = [
    { title: 'Products', link: '/store' },
    { title: 'Engagements', link: '/products/engagements' },
    { title: 'Earrings', link: '/products/earrings' },
    { title: 'Pendants', link: '/products/pendants' },
    { title: 'Rings', link: '/products/rings' },
    { title: 'Bracelets', link: '/products/bracelets' },
    { title: 'Gemstones', link: '/products/gemstones' },
];

const CustomNavbar: React.FC = () => {

    return (
        <div className="navbar-bg">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {menuItems.map((item, index) => (
                                <Nav.Link key={index} href={item.link}>
                                    <button className="accordion-button">{item.title}</button>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;