import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {CheckCircleFill} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";
import LogosGallery from "../../components/ui/logosgallery/LogosGallery";
import './ThankYou.css'

function ThankYou() {
    return (
        <div className="container thank-you-container">
            <div>
                <h2 className="heading-with-lines"/>
                <Row>
                    <div className="top-margin-div"/>
                    <Col className="mb-4 text-center">
                        <CheckCircleFill className="text-success" width={75} height={75}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h1>Thank You!</h1>
                        <p>Your order has been successfully registered. We appreciate your trust and look forward to
                            further cooperation.</p>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/">
                            <button className="shop-button">Shop now</button>
                        </Link>
                    </Col>
                </Row>
                <h2 className="heading-with-lines"/>
                <div className="margin-div"/>
                <LogosGallery/>
            </div>
        </div>
    );
}

export default ThankYou;
