import React from "react";
import mailIcon from "../../assets/mail.svg";
import signUpIcon from "../../assets/signup.svg";
import signInIcon from "../../assets/singin.svg";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="info-top-bar text-black text-center py-2">
            <Container fluid>
                <Row className="align-items-center">
                    {/* Column with mail icon */}
                    <Col xs={4} style={{borderRight: "2px solid #888"}}>
                        <img src={mailIcon} alt="Email Icon" style={{marginRight: "8px"}}/>
                        <span className="d-none d-md-inline">gemora@contact.pl</span>
                    </Col>
                    {/* Column with Sign In icon */}
                    <Col xs={4} style={{borderRight: "2px solid #888"}}>
                        <Link to="/login">
                            <img src={signInIcon} alt="SignIn Icon" style={{marginRight: "8px"}}/>
                            <span className="d-none d-md-inline">Sign In</span>
                        </Link>
                    </Col>
                    {/* Column with Sign Up icon */}
                    <Col xs={4}>
                        <Link to="/register">
                            <img src={signUpIcon} alt="SignUp Icon" style={{marginRight: "8px"}}/>
                            <span className="d-none d-md-inline">Sign Up</span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;

