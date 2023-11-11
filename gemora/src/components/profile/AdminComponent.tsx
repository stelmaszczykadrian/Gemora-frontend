import {Button} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

interface AdminComponentProps {
    handleLogout: () => void;
}

export default function AdminComponent({ handleLogout }: AdminComponentProps) {
    return(
        <div>
            <Link to={"/product/management"}>
                <p>Products - adding,deleting,editing</p>
            </Link>
            <p>All orders that have been placed</p>
            <p>List of users with possibility to change data and edit permissions</p>
            <p>Statistics</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}