import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SocialChats</h3>
                <span className="loginDesc">
                    Connect with friends and the world aroundyou on SocialChats.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder='Email' className="loginInput" />
                    <input type="email" placeholder='Password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account?</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login