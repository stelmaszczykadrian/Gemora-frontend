import React from 'react';
import './Footer.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <>
            <div>
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-5 col-12 footer-first-column">
                                <h3 className="first-column-title">Gemora</h3>
                                <p className="first-column-description">Discover exquisite, high-quality jewelry that adds
                                    sparkle and elegance to your style. Enhance your individuality with our unique
                                    accessories.</p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-12 footer-second-column">
                                <h5 className="second-column-title">Our Company</h5>
                                <p className="footer-divider"></p>
                                <ul className="footer-nav">
                                    <li className="footer-nav-item">
                                        <a className="footer-nav-link" href="/">Contact Us</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a className="footer-nav-link" href="/">About Us</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a className="footer-nav-link" href="/">Sign Up</a>
                                    </li>
                                    <li className="footer-nav-item">
                                        <a className="footer-nav-link" href="/">Sign In</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12 footer-third-column">
                                <h5 className="third-column-title">Store Information</h5>
                                <p className="footer-divider"></p>
                                <p><FontAwesomeIcon icon={faPhone} className="footer-icon"/> +92 3121324083</p>
                                <p className="footer-email">
                                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>{" "}
                                    <a href="mailto:gemora@contact.pl" className="footer-nav-link">gemora@contact.pl</a>
                                </p>
                                <p><FontAwesomeIcon icon={faLocationDot} className="footer-icon"/> Warsaw, Europe</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-second-row">© Gemora, 2023. All rights reserved.</div>
            </div>

        </>
    )
}
export default Footer;

