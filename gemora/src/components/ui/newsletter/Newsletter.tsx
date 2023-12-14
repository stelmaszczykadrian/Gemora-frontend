import React, {ChangeEvent, FormEvent, useState} from 'react';
import './Newsletter.css';
import {addEmail} from "../../../api/EmailApi";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

const Newsletter = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmailAddress(emailValue);
        setIsEmailValid(emailValue.trim().length > 0);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const emailObject = {emailAddress};
            await addEmail(emailObject);

            toast.success("Email added successfully.")

            setEmailAddress('');
        } catch (error) {

            if (error instanceof AxiosError && error.response) {
                if (error.response.status === 409) {
                    toast.error(error.response.data);
                } else if (error.response.status === 400) {
                    toast.error(error.response.data);
                } else {
                    toast.error('Something goes wrong.');
                }
            } else {
                console.error('Error sending data to backend:', error);
            }

        }
    };

    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div className="newsletter-description">Sign up for our newsletter to receive the latest updates on new
                collections, and exclusive offers delivered directly to your email inbox.
            </div>
            <form className="newsletter-input-container" onSubmit={handleSubmit}>
                <input type="email" className="newsletter-input" value={emailAddress}
                       placeholder="Enter your email address"
                       onChange={handleInputChange}/>
                <button className="newsletter-button" disabled={!isEmailValid}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Newsletter;