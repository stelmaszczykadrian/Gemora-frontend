import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <h5>Gemora</h5>
                        <p>
                            Discover exquisite, high-quality jewelry that adds sparkle and elegance to your style. Enhance your individuality with our unique accessories.
                        </p>
                    </Col>
                    <Col xs={6} md={3} lg={2} className="text-center">
                        <h6>Gemora</h6>
                        <ul className="list-unstyled">
                            <li><a href="/">Resources</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3} lg={2} className="text-center">
                        <h6>Help</h6>
                        <ul className="list-unstyled">
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Sign Up</a></li>
                            <li><a href="/">Sign In</a></li>
                        </ul>
                    </Col>
                </Row>
                <p className="text-center mt-5">&copy; Gemora, 2023. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;