import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      {
        email,
        password,
      }
    );
    // console.log(data);
    setEmail("");
    setPassword("");
    localStorage.setItem("token", data.token);
  };

  return (
    <>
      <Navbar />
      <form className="form contact-form" onSubmit={handleSubmit}>
        <h5>Login</h5>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p className="login_text">
          Not Registered?{" "}
          <span className="login_span" onClick={() => navigate("/register")}>
            Sign up here
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
