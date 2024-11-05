import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, User } from "../types/type";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkUserAuthentication = async () => {
            try {
                // Call API to check if the user is authenticated
                const response = await fetch('http://localhost:6969/api/auth/me', {
                    method: 'GET',
                    credentials: 'include', // Important to include cookies
                });

                if (response.ok) {
                    const userData = await response.json();
                    setIsAuthenticated(true);
                    setUser(userData); // Set user data from response
                } else {
                    console.warn('User not authenticated');
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
            } finally {
                setLoading(false); // Set loading to false after checking
            }
        };

        checkUserAuthentication();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch('http://localhost:6969/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include', // Important for including cookies in requests
            });

            if (!response.ok) {
                const data = await response.json(); // Get the error message from response
                throw new Error(data.error || 'Login failed');
            }

            // After a successful login, check user info
            const userInfoResponse = await fetch('http://localhost:6969/api/auth/me', {
                method: 'GET',
                credentials: 'include', // Important to include cookies
            });

            if (userInfoResponse.ok) {
                const userData = await userInfoResponse.json();
                console.log(userData)
                setIsAuthenticated(true);
                setUser(userData); // Set user data from response
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Rethrow to handle it in your component
        }
    };

    const logout = () => {
        // Clear the cookie from the client (you may want to implement this via an API call to the server)
        document.cookie = 'token=; Max-Age=0; path=/;'; // This will delete the cookie
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};