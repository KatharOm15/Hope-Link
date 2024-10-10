import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { networkRequest } from "../../utils/network_request";
import { useLoading } from "../../utils/LoadingContext";

const Login = () => {
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
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

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (passwordError) {
      alert("Please ensure the password meets the required criteria");
    } else {
      networkRequest(
        "http://localhost:3000/login",
        (response) => {
          setLoading(false);
          console.log(response);
          navigate("/home");
        },
        "post",
        formState
      );
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    alert("Forgot Password clicked");
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
          {passwordError && <p className="error-message">{passwordError}</p>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="login-options">
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
