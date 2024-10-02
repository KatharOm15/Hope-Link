import React from "react";
import { Link } from "react-router-dom";
// import backgroundImage from "./bg-img.png";

const LandingPage = () => {
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

  const buttonStyles = {
    padding: "15px 30px",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    zIndex: 1,
  };

  return (
    <div style={landingPageStyles}>
      <p style={headingStyles}>Welcome to Our Platform</p>
      <Link to="/">
        <button style={buttonStyles}>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
