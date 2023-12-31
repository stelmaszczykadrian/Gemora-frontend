import React from "react";
import ProfileButton from "../../buttons/profilebutton/ProfileButton";

interface AdminComponentProps {
    handleLogout: () => void;
}

const adminData = [
    {to: "/products/management", text: "Products"},
    {to: "/orders", text: "Orders"},
    {to: "#", text: "Users"},
];

export default function AdminComponent({handleLogout}: AdminComponentProps) {
    return (
        <div>
            {adminData.map((data, index) => (
                <ProfileButton key={index} to={data.to} text={data.text}/>
            ))}
            <div className="profile-button-container">
                <div className="profile-button" onClick={handleLogout}>Logout</div>
            </div>
        </div>
    );
}