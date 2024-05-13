import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const [payload, setPayload] = useState({ email: '', newpassword: '', confirmpassword: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (payload.newpassword !== payload.confirmpassword) {
      setError('Passwords do not match');
      return;
    }

    // API call to change password
    try {
        console.log(payload);
      const response = await axios.post('http://localhost:5500/changepassword', payload);
      if (response.data) {
        // Clear input fields on success
        setPayload({ email: '', newpassword: '', confirmpassword: '' });
        setError('');
        navigate('/login');
      }
    } catch(error) {
      console.error('Failed to change password:', error);
      setError('Failed to change password. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Change Password</h2>
          <form id="changePasswordForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input type="email" className="form-control" id="email" name="email" value={payload.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="newpassword">New Password:</label>
              <input type="password" className="form-control" value={payload.newpassword} onChange={handleChange} name="newpassword" id="newpassword" required autoComplete="new-password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input type="password" className="form-control" value={payload.confirmpassword} onChange={handleChange} name="confirmpassword" id="confirmpassword" required autoComplete="new-password" />
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button type="submit" className="btn btn-primary">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
