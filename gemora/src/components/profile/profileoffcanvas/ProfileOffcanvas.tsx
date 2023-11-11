import React, {useContext} from 'react';
import {Offcanvas} from 'react-bootstrap';
import UserContext from "../../../context/UserContext";
import './ProfileOffCanvass.css'
import AdminComponent from "../admin/AdminComponent";
import UserComponent from "../user/UserComponent";
import NotLoggedIn from "../notloggedin/NotLoggedIn";

interface ProfileOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ProfileOffcanvas: React.FC<ProfileOffcanvasProps> = ({show, onHide}) => {
    const {currentUser, getUserRole} = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title/>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="profile-container">
                    {currentUser ? (
                        <div className="profile-current-user-container">
                            <div className="user-info">
                                <p>Email: <span className="user-info-email">{currentUser.email}</span></p>
                                <p>Role: <span className="user-info-role">{getUserRole()}</span></p>
                            </div>
                            {getUserRole() === 'ADMIN' ? (
                                <AdminComponent handleLogout={handleLogout}/>
                            ) : (
                                <UserComponent handleLogout={handleLogout}/>
                            )}
                        </div>
                    ) : (
                        <NotLoggedIn/>
                    )}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ProfileOffcanvas;