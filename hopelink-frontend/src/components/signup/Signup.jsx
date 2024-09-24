import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Font Awesome icons
import './SignUp.css'
import { Link,Outlet } from "react-router-dom";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert(`Signed up as ${formState.username}`);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="username"
              required
              value={formState.username}
              onChange={handleInputChange}
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formState.password}
              onChange={handleInputChange}
            />
            <label>Password</label>
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formState.confirmPassword}
              onChange={handleInputChange}
            />
            <label>Confirm Password</label>
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <br />
        <p>
            Already have an account?{' '}
            <Link to="/login" className="signup-link">Login</Link>
          </p>
      </div>
    
    </div>
  );
};

export default SignUp;
