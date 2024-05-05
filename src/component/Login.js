

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Call login API
      fetch('http://localhost:8000/teachers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setError(null);
          alert('Email found, OTP sent.');
          // You can replace this with code to handle successful login
          setRedirectToDashboard(true);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred while logging in.');
      });
    } else {
      setError('Please enter your email');
    }
  }

  return (
    <div className="container-fluid col-lg-5 col-md-6 col-sm-8 mt-5 mb-5  map-frame rounded p-3" style={{ backgroundColor:'#63c5da'}}>
       <form onSubmit={handleSubmit}>
        <h3 style={{textAlign: 'center'}}>Login</h3><hr />
        <div className="form-group ">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email" />
          <small className="form-text text-muted">Please enter your pcampus email.</small>
        </div>
        <center>  <button type="submit" className="btn" style={{ backgroundColor: 'lightblue', alignSelf:'center', margin:'8px'}} >Submit</button></center>
      </form>
      <center>{error && <div className="error">{error}</div>}
        {redirectToDashboard && <Navigate to="/fas/dashboard" replace />}</center>
    </div>
  )
}

export default Login;



