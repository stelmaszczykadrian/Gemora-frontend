import React from "react";
import ProfileButton from "../../buttons/profilebutton/ProfileButton";

interface UserComponentProps {
    handleLogout: () => void;
}

const userData = [
    {to: "#", text: "My profile"},
    {to: "#", text: "My orders"}
];

export default function UserComponent({handleLogout}: UserComponentProps) {
    return (
        <div>
            <div>
                {userData.map((data, index) => (
                    <ProfileButton key={index} to={data.to} text={data.text}/>
                ))}
                <div className="profile-button-container">
                    <div className="profile-button" onClick={handleLogout}>Logout</div>
                </div>
            </div>

        </div>
    );
}