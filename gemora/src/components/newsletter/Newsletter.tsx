import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">Newsletter</h1>
            <div className="newsletter-description">Get timely updates from your favorite products.</div>
            <div className="newsletter-input-container">
                <input className="newsletter-input" placeholder="Your email" />
                <button className="newsletter-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Newsletter;