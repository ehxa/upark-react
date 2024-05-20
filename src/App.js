import React, { useState } from "react";
import logo from ".//images/logo.svg";
import { Button } from "react-bootstrap";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //
    };
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <img src={logo} alt="Upark" />
                <div className="inputContainer">
                    <input 
                        type="text" 
                        placeholder="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <Button className="loginButton" href="/pages/parkfacilities">LOG IN</Button>
                </div>
                <a href="/forgot-password">Forgot your username or password? Click here.</a>
            </div>
        </div>
    );
};

export default LoginPage;
