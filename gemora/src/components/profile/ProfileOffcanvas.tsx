import React, {useContext} from 'react';
import {Offcanvas} from 'react-bootstrap';
import CartContext from "../../context/CartContext";
import UserContext from "../../context/UserContext";
import './ProfileOffCanvass.css'
import AdminComponent from "./AdminComponent";
import UserComponent from "./UserComponent";
import NotLoggedIn from "./NotLoggedIn";

interface ProfileOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const ProfileOffcanvas: React.FC<ProfileOffcanvasProps> = ({show, onHide}) => {

    const {currentUser, getUserRole} = useContext(UserContext);
    console.log(currentUser)

    const {clearCart} = useContext(CartContext);

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
                <div>
                    {currentUser ? (
                        <div>
                            <p>Email: {currentUser.email}</p>
                            <p>Role: {getUserRole()}</p>
                            {getUserRole() === 'ADMIN' ? (
                                <AdminComponent handleLogout={handleLogout}/>
                            ) : (
                                <UserComponent handleLogout={handleLogout} clearCart={clearCart}/>
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