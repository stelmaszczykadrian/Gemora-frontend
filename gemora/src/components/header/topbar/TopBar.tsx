import React from "react";
import mailIcon from "../../../assets/svg/mail.svg";
import signUpIcon from "../../../assets/svg/signup.svg";
import signInIcon from "../../../assets/svg/singin.svg";
import {Container, Row} from "react-bootstrap";
import './TopBar.css'
import TopBarLink from "./link/TopBarkLink";

export default function TopBar() {
    return (
        <div className="info-top-bar text-black text-center py-2">
            <Container fluid>
                <Row className="align-items-center">
                    <TopBarLink to="/contact" icon={mailIcon} text="Contact Us"/>
                    <TopBarLink to="/login" icon={signInIcon} text="Sign In"/>
                    <TopBarLink to="/register" icon={signUpIcon} text="Sign Up"/>
                </Row>
            </Container>
        </div>
    );
};



