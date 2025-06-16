import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./assets/logo.jpg";

const Login = () => {
  const [companyID, setCompanyID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        companyID,
        password,
      });

      console.log("=>", response);
      
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Login failed: Invalid credentialssss");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Company ID:</label>
        <input
          type="text"
          value={companyID}
          onChange={(e) => setCompanyID(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
