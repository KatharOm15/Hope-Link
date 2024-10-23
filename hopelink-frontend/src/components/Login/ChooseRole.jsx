import React, { useState } from "react";
import "./ChooseRole.css";

const ChooseRole = ({
  closeModal,
  openLoginPage,
  openVolunteerSignup,
  openNgoSignup,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Join Us</h2>
        <p className="popup-description">How would you like to sign up?</p>
        <div className="popup-buttons">
          <button className="popup-button" onClick={openVolunteerSignup}>
            Sign up as Volunteer
          </button>
          <button className="popup-button" onClick={openNgoSignup}>
            Sign up as NGO
          </button>
          <p className="popup-login-link">
            Already have an account?
            <span className="popup-link" onClick={openLoginPage}>
              Log In
            </span>
          </p>
        </div>
        <button className="popup-close" onClick={closeModal}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ChooseRole;
