import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    console.log('Is Authenticated:', isAuthenticated); // Debugging line

    if (loading) {
        return <div>Loading...</div>; // Or a spinner, etc.
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};


export default ProtectedRoute;