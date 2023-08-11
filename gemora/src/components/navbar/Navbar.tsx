import React, {useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar: React.FC = () => {
    const [jewelryExpanded, setJewelryExpanded] = useState(false);
    const [watchesExpanded, setWatchesExpanded] = useState(false);

    const toggleJewelryAccordion = () => {
        setJewelryExpanded(!jewelryExpanded);
    };

    const toggleWatchesAccordion = () => {
        setWatchesExpanded(!watchesExpanded);
    };

    return (
        <div className="navbar-bg py-3">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                                <Nav.Link href="/store">
                                    <button
                                        className={`accordion-button ${jewelryExpanded ? 'active' : ''}`}
                                    >
                                        Store
                                    </button>
                                </Nav.Link>

                                <Nav.Link href="#">
                                    <button
                                        className={`accordion-button ${jewelryExpanded ? 'active' : ''}`}
                                        onClick={toggleJewelryAccordion}
                                        aria-expanded={jewelryExpanded}
                                    >
                                        Jewelry
                                    </button>
                                    {jewelryExpanded && (
                                        <div className="accordion-content">
                                            <Nav.Link href="#">Necklaces</Nav.Link>
                                            <Nav.Link href="#">Earrings</Nav.Link>
                                            <Nav.Link href="#">Rings</Nav.Link>
                                        </div>
                                    )}
                                </Nav.Link>

                                <Nav.Link href="#">
                                    <button
                                        className={`accordion-button ${watchesExpanded ? 'active' : ''}`}
                                        onClick={toggleWatchesAccordion}
                                        aria-expanded={watchesExpanded}
                                    >
                                        Watches
                                    </button>
                                    {watchesExpanded && (
                                        <div className="accordion-content">
                                            <Nav.Link href="#">Men's Watches</Nav.Link>
                                            <Nav.Link href="#">Women's Watches</Nav.Link>
                                        </div>
                                    )}
                                </Nav.Link>

                                <Nav.Link href="#">
                                    <button
                                        className={`accordion-button ${jewelryExpanded ? 'active' : ''}`}
                                    >
                                        New Arrivals
                                    </button>
                                </Nav.Link>

                                <Nav.Link href="#">
                                    <button
                                        className={`accordion-button ${jewelryExpanded ? 'active' : ''} red-text`}
                                    >
                                        Sales
                                    </button>
                                </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;