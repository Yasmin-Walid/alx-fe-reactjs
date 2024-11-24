import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    return (
        <Router> {/* Ensure BrowserRouter is wrapping the Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                {/* Dynamic Route for Blog Post */}
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<Navigate to="/" replace />} /> {/* Catch-all for unknown routes */}
            </Routes>
        </Router>
    );
};

export default App;
