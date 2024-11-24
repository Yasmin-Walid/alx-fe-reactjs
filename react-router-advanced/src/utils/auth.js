import { useState, useEffect } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulating an authentication check from localStorage or other storage
        const authStatus = localStorage.getItem("auth");
        setIsAuthenticated(authStatus === "true");
    }, []);

    return isAuthenticated;
};

export default useAuth;
