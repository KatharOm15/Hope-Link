import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './landing.css'

const Landing = () => {
  const navigate = useNavigate();

  // Handlers for button clicks
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="main">
      <div className='left' style={{ textAlign: 'center', padding: '50px' }}>
      
      <h1>Welcome to Our Platform</h1>
      <p>Please choose one of the following options:</p>
      
      {/* Buttons to redirect to Login and Signup pages */}
      <button
        onClick={handleLoginClick}
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Login
      </button>

      <button
        onClick={handleSignupClick}
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Signup
      </button>
      
      
    </div>
    <div className="right">
    <Outlet></Outlet>
    </div>
    </div>

    
    
  );
};

export default Landing;
