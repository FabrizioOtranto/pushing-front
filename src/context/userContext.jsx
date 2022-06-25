import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userName, setUsername] = useState(() => {
        const localData = localStorage.getItem('user');
        return localData ? localData : '';
    });
    const [token, setToken] = useState(() => {
        const localData = localStorage.getItem('token');
        return localData ? localData : '';
    });

    useEffect(() => {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', userName);
    }, [token]);

    const login = (data) => {
        setToken(data.token);
        if (data.newUser) {
            setUsername(data.newUser.user);
        } else {
            setUsername(data.user2.user);
        }
    };

    const logout = () => {
        setToken('');
        setUsername('');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ token, login, logout, userName }}>
            {children}
        </UserContext.Provider>
    );
};
