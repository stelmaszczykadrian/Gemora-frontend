import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div>
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
                        </div>

                        <div>
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
                        </div>
                        <div>
                            <button
                                className={`accordion-button ${jewelryExpanded ? 'active' : ''}`}
                            >
                                New Arrivals
                            </button>
                        </div>
                        <div>
                            <button
                                className={`accordion-button ${jewelryExpanded ? 'active' : ''} red-text`}
                            >
                                Sales
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;