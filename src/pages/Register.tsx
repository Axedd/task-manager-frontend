import React, { useState } from "react";
import styles from "./Register.module.css";


const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:6969/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });
            
            if (response.ok) {
                setMessage('User registered successfully!');
            } else {
                setMessage('Registration failed');
            }

        } catch (error) {
            setMessage('An error occurred');
        }
    }; 

    return (
        <div className={styles.center_container}>
            <div className={styles.register_form}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
            <a href="/login">Login</a>
        </div>
        </div>
    );
};

export default Register;