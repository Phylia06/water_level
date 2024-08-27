import React from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../Forgot/Forgot'
import '../Register/Register';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    
        navigate('/Landing'); 
  };

    const handleRegister = () => {
        navigate('/Register');
    }

    const handleforgot = (e) => {
    
        navigate('/Forgot'); 
  };
    return(
        <div className="con" onSubmit={handleSubmit}>
            <form action="">
                <h1>
                    Login
                </h1>

                <div className="inbox">
                    <label for="email">Email</label>
                    <input type="email" placeholder="youremail@gmailcom" id="email" name="email" required/>
                </div>

                <div className="inbox">
                    <label for="password">Password</label>
                    <input type="password" id="pwd" name="pwd" required/>
                </div>

                <div className="rem-forg">
                    <span onClick={handleforgot}>Forgot Password</span>
                </div>
                <button type="submit">
                    Log In
                </button>

                <div className="regis">
                    <p>
                        Don't have an account?
                    </p>
                </div>
            </form>
            <button type="button" onClick={handleRegister}>Register</button>
        </div>
    )
} 

export default Login;