import noPageLogo from '../../assets/404.jpg';
import React from "react";
import './NoPage.css';
import {Link} from "react-router-dom";


const NoPage = () => {
    return (
        <div className="center-container">
            <div className="container image-container">
                <img src={noPageLogo} alt="404 page" width="70%" height="70%"/>
            </div>
            <div className="button-container">
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                    <button className="no-page-button">Back to Home</button>
                </Link>
            </div>
        </div>

    );
};

export default NoPage;