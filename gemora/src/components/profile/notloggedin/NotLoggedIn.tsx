import React from "react";
import padlockLogo from "../../../assets/images/padlock.jpg";

export default function NotLoggedIn() {
    return (

        <div className="not-loggedIn-container">
            <img className="padlock-logo" src={padlockLogo} alt="Padlock Logo"/>
            <div className="not-loggedIn--message">
                <p className="">Are you our customer?
                    <a href="/register" className="login-signup-offcanva">Sign up</a>
                    and join us!</p>
                <p className="login-paragraph">Already have an account?
                    <a href="/login" className="login-signin">Sign in here</a></p>
            </div>
        </div>

    );
}