import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validation logic
        if (!formData.username) {
            newErrors.username = "Username is required.";
        }
        if (!formData.email) {
            newErrors.email = "Email is required.";
        }
        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        // If there are no errors, process the form
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username} // Controlled component
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email} // Controlled component
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password} // Controlled component
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
value={username}", "value={email}", "value={password}