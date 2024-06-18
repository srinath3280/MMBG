import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        axios({
            method: 'post',
            url: 'http://localhost:4550/login',
            data: data
        })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    alert('Login Successful');
                    // window.location.reload();
                    navigate('/')
                    startTokenExpirationTimer();
                } else {
                    alert('User records do not match');
                }
            });
    };

    useEffect(() => {
        // Check if token exists in local storage when component mounts
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Start the timer for the stored token
            startTokenExpirationTimer();
        }
    }, []);

    const startTokenExpirationTimer = () => {
        // Clear the existing timer if any
        clearTimeout(window.tokenExpirationTimer);
        // Set a new timer for 3 minute
        window.tokenExpirationTimer = setTimeout(() => {
            localStorage.removeItem('token');
            alert('Session expired. Please log in again.');
            navigate('/');
        }, 180000); // 1 minute = 60,000 milliseconds
    };

    return (

        <div className="login-container">
            <div className='login-content'>
                <div className="login-box1">
                    <h1>Hello!</h1>
                    <p>Sign in to your account</p>
                    <form action="" onSubmit={submitHandler}>
                        <div className="input-container">
                            <i class="bi bi-person"></i>
                            <input type="text" placeholder="User name" name="username" value={username} onChange={changeHandler} />
                        </div>
                        <div className="input-container">
                            <i class="bi bi-lock-fill"></i>
                            <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler} />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> <span>Remember me</span>
                            </label>
                            <a href="/">Forgot password?</a>
                        </div>
                        <button type="submit">SIGN IN</button>
                    </form>
                    <p className="create-account">
                        Don't have an account? <a href="/register">Create new</a>
                    </p>
                </div>
                <div className="welcome-back">
                    <h1>Welcome Back!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra magna nisl, at posuere sem dapibus sed.</p>
                </div>
            </div>
        </div>
    );
}

export default Login;