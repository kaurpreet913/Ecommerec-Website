import React, { useState } from "react";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";  
import './CSS/Signup.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: ''});
    const [error, setError] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5500/login', credentials);
          if (response.data.userId) {
            login(response.data.userId);
            navigate('/');
          }
        } catch(error) {
          console.error('Login failed', error);
        }
      };

    return (
        <div className="containers">
            <div className="form-box">
                <h1 id="title">Log in</h1>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required /><br/><br/>
                        </div> 

                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required /><br/><br/>
                        </div> 
                    </div>
                    <div className="btn-field">
                       <button type="submit" className='btn btn-primary'>Login</button><br/><br/>
                    </div>
                    <div>
                    <Link to='/ChangePassword' class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                Change Password</Link>
                    </div>
                </form>
            </div>    
        </div>
    );
}

export default Login;
