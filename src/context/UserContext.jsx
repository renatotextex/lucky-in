'use client';

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: '', email: '' });

    const setUserData = (userData) => {
        setUser(prevUser => ({ ...prevUser, ...userData }));
    };

    return (
        <UserContext.Provider value={{ user, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
