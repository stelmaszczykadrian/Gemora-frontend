import React from 'react';
import './Footer.css'
import gemoraLogo from '../../assets/GemoraLogo.jpg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';

const companyInfo = {
    name: 'Gemora',
    year: 2023,
    phone: '+92 3121324083',
    email: 'gemora@contact.pl',
    location: 'Warsaw, Europe',
};

const footerLinks = [
    {text: 'Contact Us', url: '/contact'},
    {text: 'Sign Up', url: '/register'},
    {text: 'Sign In', url: '/login'},
];

const Footer: React.FC = () => {
    return (
        <>
            <div>
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-5 col-12">
                                <div className="text-center" style={{marginBottom: '20px'}}>
                                    <img src={gemoraLogo} alt="Gemora logo" width="35%" height="35%"/>
                                </div>
                                <p className="first-column-description">Discover exquisite, high-quality jewelry that
                                    adds
                                    sparkle and elegance to your style. Enhance your individuality with our unique
                                    accessories.</p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-12 footer-second-column">
                                <h5 className="second-column-title">Our Company</h5>
                                <p className="footer-divider"></p>
                                <ul className="footer-nav">
                                    {footerLinks.map((link, index) => (
                                        <li key={index} className="footer-nav-item">
                                            <a className="footer-nav-link" href={link.url}>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12 footer-third-column">
                                <h5 className="third-column-title">Store Information</h5>
                                <p className="footer-divider"></p>
                                <p><FontAwesomeIcon icon={faPhone} className="footer-icon"/> {companyInfo.phone}</p>
                                <p className="footer-email">
                                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>{" "}
                                    <a href="mailto:gemora@contact.pl"
                                       className="footer-nav-link">{companyInfo.email}</a>
                                </p>
                                <p><FontAwesomeIcon icon={faLocationDot}
                                                    className="footer-icon"/> {companyInfo.location}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-second-row">© {companyInfo.name}, {companyInfo.year}. All rights reserved.</div>
            </div>

        </>
    )
}
export default Footer;

