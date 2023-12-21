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

    const [userId, setUserId] = useState(() => {
        const localData = localStorage.getItem('userId');
        return localData ? localData : '';
    });

    useEffect(() => {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userId', userId);
        window.localStorage.setItem('user', userName);
    }, [token]);

    const login = (data) => {
        setToken(data.token);
        if (data.newUser) {
            setUsername(data.newUser.username);
            setUserId(data.newUser._id);
        } else {
            setUsername(data.user.username);
            setUserId(data.user._id);
        }
    };

    const logout = () => {
        setToken('');
        setUsername('');
        setUserId('')
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('userId');
    };

    return (
        <UserContext.Provider value={{ token, login, logout, userName, userId }}>
            {children}
        </UserContext.Provider>
    );
};
