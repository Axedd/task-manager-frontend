import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'; // Import the AuthContext

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Get the login function from the context

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login(username, password); // Call the login function from AuthContext
            setMessage('User logged in successfully!');
            navigate('/'); // Redirect after successful login
        } catch (error) {
            setMessage('Login failed');
        }
    }; 

    return (
        <div className={styles.center_container}>
            <div className={styles.login_form}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Login</button>
                </form>
                <p>{message}</p>
                <a href="/register">Register</a>
            </div>
        </div>
    );
};

export default Login;