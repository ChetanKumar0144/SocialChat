import React from 'react';
import './register.css';

const Register = () => {
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
                    <input type="text" placeholder='Username' className="loginInput" />
                    <input type="email" placeholder='Password' className="loginInput" />
                    <input type="password" placeholder='Password' className="loginInput" />
                    <input type="email" placeholder='Confirm Password' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;