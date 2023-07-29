import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginResult } from "../Redux/actions/loginActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector(state => state.login.loading);
    const data = useSelector(state => state.login.data);
    const error = useSelector(state => state.login.error);
    // console.log(loading);
    // console.log(data);
    // console.log(typeof data)
    // console.log(error);
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log('handling Login');
        dispatch(fetchLoginResult(name, password));

        !data.message && navigate('./profile');
    }

    return (
        <div>
            <div className="main-container">
                <div className="login-container">
                    <span>Welcome back!</span>
                    <h1>Sign in to your account</h1>

                    <div className="input-container">
                        <form onSubmit={handleLogin}>
                            <label>Your email</label>
                            <input
                                type="text"

                                onChange={e => setName(e.target.value)} value={name}
                            />

                            <label>Password</label>
                            <input
                                type="password"

                                onChange={e => setPassword(e.target.value)} value={password}
                            />
                            <button type="submit">Continue</button>
                        </form>

                        <a href="#">Forget your password?</a>

                        {
                            data.message &&
                            <p className="error-message">Invalid Credientials</p>
                        }
                    </div>
                </div>
                <span className="signup-text">Don't have an account? <a href="#">Sign Up</a></span>
            </div>
        </div>
    )
}

export default LoginPage;