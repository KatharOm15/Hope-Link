import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { networkRequest } from "../../utils/network_request";
const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError(
          "Password must be at least 8 characters, contain one capital letter, one symbol, and one number"
        );
      } else {
        setPasswordError("");
      }
    }

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (passwordError) {
      alert("Please ensure the password meets the required criteria");
      return;
    }

    networkRequest(
      "http://localhost:3000/signup",
      (response) => {
        alert(`Signed up as ${formState.username}`);
        console.log(response);
      },
      "post",
      formState
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRoleChange = (role) => {
    setFormState({ ...formState, role });
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
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="input-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              value={formState.confirmPassword}
              onChange={handleInputChange}
            />
            <label>Confirm Password</label>
            <span
              className="password-toggle-icon"
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="role-selection">
            <label className="role-label">Role:</label>
            <div className="role-buttons">
              <button
                type="button"
                className={`role-button ${
                  formState.role === "NGO" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("NGO")}
              >
                NGO
              </button>
              <button
                type="button"
                className={`role-button ${
                  formState.role === "Volunteer" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("Volunteer")}
              >
                Volunteer
              </button>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
        <br />
        <p>
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      </div>
    
    </div>
  );
};

export default SignUp;
