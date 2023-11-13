import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div className="newsletter-description">Sign up for our newsletter to receive the latest updates on new collections, and exclusive offers delivered directly to your email inbox.</div>
            <div className="newsletter-input-container">
                <input className="newsletter-input" placeholder="Enter your email address" />
                <button className="newsletter-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Newsletter;