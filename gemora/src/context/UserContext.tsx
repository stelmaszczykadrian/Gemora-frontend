import React, { createContext, useCallback, useEffect, useState } from "react";
import {ACCESS_TOKEN} from "../constants/constants";
import axios from "axios";
import {AuthService} from "../api/AuthService";


export type UserResponse = {
    id: number
    email: string

}

const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: User | null) => {},
};

export type UserContextType = {
    currentUser: User | null;
    userModifier: (user: User | null) => void;
};

export type User = {
    id: number
    email: string
}

export const UserContext = createContext<UserContextType>(defaultSettings);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const userEmail = AuthService.getUserEmailFromToken();

    const userModifier = (user: User | null) => {
        setCurrentUser(user);
    };

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/profile/${userEmail}`);

                if (response.status === 200) {
                    const userData: UserResponse = response.data;

                    userModifier({
                        email: userData.email,
                        id: userData.id
                    });
                } else {
                    console.error('Error while downloading user data');
                }
            } catch (error) {
                console.error('Error during user download:', error);
            }
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        // TODO Handle check validity of JWT (expiration time check) https://www.npmjs.com/package/jwt-decode
        if (token && !currentUser) {
            fetchUser();
        }
    }, [fetchUser, currentUser]);


    return (
        <UserContext.Provider value={{ currentUser, userModifier }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;