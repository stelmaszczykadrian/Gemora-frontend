import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import {AuthService} from "../../api/AuthService";
import './Navbar.css'


const CustomNavbar = () => {
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const userEmailFromToken = AuthService.getUserEmailFromToken();
        setUserEmail(userEmailFromToken);
    }, []);

    return (
        <Navbar className="navbar-bg">
            <Container>
                {/*<Navbar.Brand href="/">Gemora</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Text className="ms-auto">
                        {userEmail ? (
                            <>
                                Signed in as: <a href="#login">{userEmail}</a>
                            </>
                        ) : (
                            <>Not signed in</>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
