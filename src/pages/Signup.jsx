import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        postCode: '',
        address: ''
    });

    const [error, setError] = useState(null); // Define error state

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/signup', formData);
            alert('Signup successful, please login.');
            navigate('/login'); // Redirect to login after successful signup
        } catch(error) {
            console.error('Signup error:', error.response ? error.response.data : error);
            setError('Error during signup.'); // Set error state
        }
    };

    return (
        <div className="containers">
            <div className="form-box">
                <h1 id="title">Sign up</h1>
                {error && <div className="error">{error}</div>} {/* Display error message */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <input
                        type="text"
                        name="postCode"
                        placeholder="Postal Code"
                        value={formData.postCode}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <button type="submit" style={{ backgroundColor: 'orange', color: 'white' }}>Signup</button>

                </form>               
            </div>
        </div>
    );
}

export default Signup;
