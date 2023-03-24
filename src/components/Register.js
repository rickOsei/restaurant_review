import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(data);
      localStorage.setItem("token", data.token);
      setEmail("");
      setName("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="form-section">
        <form className="form contact-form" onSubmit={handleSubmit}>
          <h5>Register</h5>
          <div className="form-row">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-input username-input"
              onChange={(e) => setName(e.target.value)}
            />
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
            Already Registered?
            <span className="login_span" onClick={() => navigate("/login")}>
              Sign in here
            </span>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
