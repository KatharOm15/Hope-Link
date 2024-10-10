import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './landing.css'
import logo from './landing.png'
import Header from '../Header/Header'



const LandingPage = () => {
  const navigate = useNavigate();
  const landingPageStyles = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    position: "relative",
  };

  const headingStyles = {
    fontSize: "3rem",
    marginBottom: "20px",
    zIndex: 1,
  };
  const handleSignupClick = () => {
    navigate('/sign-up');
  };


  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    
    <div className="main">        
    <div className="container">
      Hopelink
    </div>
    <div className="getStarted">
      <button onClick={handleSignupClick} className='btn-landing'>Get Started</button>
    </div>
  </div>
  
    
    
  );
};

export default LandingPage;
