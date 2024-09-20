import React, { useState } from "react";
import "./Login.css"; // Ensure the CSS is linked properly
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import Font Awesome icons
import { Link } from "react-router-dom";

const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${formState.username}`);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    alert("Forgot Password clicked");
  };

  const handleSignup = () => {
    alert("Redirecting to signup");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
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
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {/* Forgot password and Sign up options */}
        <div className="login-options">
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
          <p>
            Don't have an account?{' '}
            <Link to="/sign-up" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
