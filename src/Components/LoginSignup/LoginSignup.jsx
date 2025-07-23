
import './LoginSignup.css';
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png';
import { useState } from 'react';


const LoginSignup = () => {

    const [action, setAction] = useState('Sign Up');
    return (
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="user_icon" />
              <input type="text" name="" id="" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="email_icon" />
            <input type="email" name="" id="" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password_icon} alt="password_icon" />
            <input type="password" name="" id="" placeholder="Password" />
          </div>
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    );
}

export default LoginSignup;