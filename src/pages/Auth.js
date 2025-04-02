// src/pages/Auth.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null); // For success/error messages

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (isSignup) {
          await axios.post('http://localhost:5000/users/register', { username, password });
          setMessage({ text: 'Signup successful!', type: 'success' });
          setTimeout(() => navigate('/auth'), 2000)
        } else {
          const { data } = await axios.post('http://localhost:5000/users/login', { username, password });
          localStorage.setItem('profile', JSON.stringify(data));
          navigate('/');
        }
      } catch (error) {
        setMessage({ text: error.response.data.message, type: 'error' });
      }
    };
  
    return (
      <div className="container mt-4">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        {message && (
          <div className={`alert alert-${message.type}`} role="alert">
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* ... (input fields) ... */}
          <button type="submit" className="btn btn-primary">{isSignup ? 'Sign Up' : 'Login'}</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Switch to Login' : 'Switch to Sign Up'}
          </button>
        </form>
      </div>
    );
  }
  
  export default Auth;