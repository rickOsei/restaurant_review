import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FcGoogle } from "react-icons/fc";

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
    navigate("/form");
    localStorage.setItem("token", data.token);
  };

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    window.open("http://localhost:3000/api/v1/auth/google");
  };

  return (
    <>
      <Navbar />
      <section className="form-section">
        <form className="form contact-form" onSubmit={handleSubmit}>
          <h5>Login</h5>
          <div className="google_login">
            <button className="btn google_btn" onClick={handleGoogleSubmit}>
              <FcGoogle
                style={{
                  position: "relative",
                  top: "5px",
                  fontSize: "20px",
                  marginRight: "5px",
                }}
              />{" "}
              Sign in with Google
            </button>
            <div className="line">
              <span className="line_span">OR</span>
            </div>
          </div>
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
      </section>
    </>
  );
};

export default Login;
