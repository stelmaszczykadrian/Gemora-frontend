import React, {createContext, useCallback, useEffect, useState} from "react";
import {ACCESS_TOKEN, BaseUrl} from "../constants/constants";
import axios from "axios";
import {AuthService} from "../services/AuthService";

export type UserResponse = {
    id: number
    email: string
    role: string

}

const defaultSettings: UserContextType = {
    currentUser: null,
    userModifier: (user: User | null) => {
    },
    getUserRole: () => null,
};

export type UserContextType = {
    currentUser: User | null;
    userModifier: (user: User | null) => void;
    getUserRole: () => string | null;
};

export type User = {
    id: number
    email: string
    role: string
}

export const UserContext = createContext<UserContextType>(defaultSettings);

export const UserContextProvider = ({children}: React.PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const userEmail = AuthService.getUserEmailFromToken();
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    const userModifier = (user: User | null) => {
        setCurrentUser(user);
    };

    const fetchUser = useCallback(async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if (token) {
            try {
                setIsLoadingUser(true);

                const response = await axios.get(`${BaseUrl}/api/users/profile/${userEmail}`);

                if (response.status === 200) {
                    const userData: UserResponse = response.data;

                    userModifier({
                        email: userData.email,
                        id: userData.id,
                        role: userData.role
                    });
                } else {
                    console.error('Error while downloading user data');
                }
            } catch (error) {
                console.error('Error during user download:', error);
            } finally {
                setIsLoadingUser(false);
            }
        }
    }, []);

    const getUserRole = (): string | null => {
        if (currentUser) {
            return currentUser.role;
        }
        return null;
    };

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        // TODO Handle check validity of JWT (expiration time check) https://www.npmjs.com/package/jwt-decode
        if (token && !currentUser) {
            fetchUser();
        } else {
            setIsLoadingUser(false)
        }
    }, [fetchUser, currentUser]);


    return isLoadingUser ? <></> :
        (<UserContext.Provider value={{currentUser, userModifier, getUserRole}}>
            {children}
        </UserContext.Provider>);
};

export default UserContext;