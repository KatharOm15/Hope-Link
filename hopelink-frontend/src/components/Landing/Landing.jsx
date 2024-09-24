import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './landing.css'
import logo from './landing.png'

const Landing = () => {
  const navigate = useNavigate();

  // Handlers for button clicks
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/sign-up');
  };

  return (
   <div className="main">
      <div className="left">
        <div className="content">
          <h1>Hope-Link</h1>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam eligendi qui ipsum eum harum rem veritatis tenetur dolorum excepturi, distinctio laborum architecto sit nulla quo quisquam amet. Dolore, libero?</h2>
        </div>
        <div className="buttons">
          <button onClick={handleLoginClick}>Login</button>
          <button onClick={handleSignupClick}>Sign-up</button>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img src={logo} alt="sjh" />
        </div>
      </div>
   </div>
    
    
  );
};

export default Landing;
