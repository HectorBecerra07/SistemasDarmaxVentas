import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(window.localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = window.localStorage.getItem('token');
        const storedUser = window.localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            const { token, user } = response.data;
            
            window.localStorage.setItem('token', token);
            window.localStorage.setItem('user', JSON.stringify(user));
            
            setToken(token);
            setUser(user);

            return user;
        } catch (error) {
            console.error('Login failed:', error);
            // Here you could handle login errors, e.g., show a notification
            throw error;
        }
    };

    const logout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
