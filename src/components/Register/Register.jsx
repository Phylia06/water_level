import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import '../Login/Login'
import './Register.css'
import '../Landing';


const Register = () => {
    const [formData, setFormData] = useState({
        company:'',
        username: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data',formData );
    
        navigate('/Landing'); 
  };

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    }

    
    return(
        <div className="con">
            <form method="POST" onSubmit={handleSubmit}>
                <h1>
                    Registration
                </h1>

                <div className="inbox">
                    <label for="Company">Company</label>
                    <input type="text" id="comp" name="comp"  value={formData.comp}
          onChange={handleChange} required/>
                </div>

                <div className="inbox">
                    <label for="uname">Name</label>
                    <input type="text" id="uname" name="uname"  value={formData.uname}
          onChange={handleChange} required/>
                </div>

                <div className="inbox">
                    <label for="email">Email</label>
                    <input type="email" placeholder="youremail@gmailcom" id="email" name="email"  value={formData.email}
          onChange={handleChange} required/>
                </div>

                <div className="inbox">
                    <label for="password">Password</label>
                    <input type="password" id="pwd" name="pwd"  value={formData.pwd}
          onChange={handleChange}required/>
                </div>

                <div className="rem-forg">
                    <p onClick={handleLogin}>Already a Member?{' '} </p>
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
} 

export default Register;