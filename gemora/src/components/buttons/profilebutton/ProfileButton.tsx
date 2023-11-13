import React from "react";
import { Link } from "react-router-dom";
import './ProfileButton.css';

interface ProfileButtonProps {
    to: string;
    text: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ to, text }) => (

        <Link to={to}>
            <div className="profile-button-container">
                <div className="profile-button">
                    {text}
                </div>
            </div>
        </Link>
);


export default ProfileButton;