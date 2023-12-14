import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {ACCESS_TOKEN} from "../constants/constants";
import UserContext from "../context/UserContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
    const {getUserRole} = useContext(UserContext);
    const jwt = localStorage.getItem(ACCESS_TOKEN);

    if (!jwt) {
        return <Navigate to={"/"} replace/>;
    }

    const userRole = getUserRole();

    if (userRole != "ADMIN") {
        return <Navigate to={"/"} replace/>;
    }

    return <>{props.children}</>;
};

export default ProtectedRoute;
