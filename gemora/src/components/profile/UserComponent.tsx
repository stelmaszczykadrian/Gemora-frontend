import {Button} from "react-bootstrap";
import React from "react";
import padlockLogo from "../../assets/images/padlock.jpg";

interface UserComponentProps {
    handleLogout: () => void;
    clearCart: () => void;
}

export default function UserComponent({ handleLogout,clearCart }: UserComponentProps) {
    return(
        <div>
            <p>My profile</p>
            <p>My orders</p>
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={clearCart}>Czyść Koszyk</Button>
        </div>
    );
}