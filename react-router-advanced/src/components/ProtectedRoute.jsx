import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../utils/auth";


const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth(); // Use the custom hook to check auth status

    if (!isAuthenticated) {
        // If not authenticated, redirect to home page
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the children (protected components)
    return children;
};

export default ProtectedRoute;