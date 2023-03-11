import React, { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showBar, setShowBar] = useState(true);
  return (
    <>
      <nav className="nav-container">
        <div className="logo">
          <h2 onClick={() => navigate("/")}>
            Res<span className="logo-span">Review</span>
          </h2>
        </div>
        <div className="nav-links">
          <h4 className="links" onClick={() => navigate("/reviews")}>
            Reviews
          </h4>
          <h4 className="links">About</h4>
          <h4 className="links">Categories</h4>
          <h4 className="links">Contact</h4>
        </div>
        <div className="socials">
          <button className="btn-socials">
            <FaFacebookF />
          </button>
          <button className="btn-socials">
            <FaInstagram />
          </button>
          <button className="btn-socials" onClick={() => navigate("/register")}>
            <HiOutlineLogin />
          </button>
        </div>

        <div className="sidebar">
          <FaBars
            className="bar"
            onClick={() => setShowBar(showBar === false ? true : false)}
          />
        </div>
      </nav>
      <nav className={showBar === false ? "mini-nav" : "mini-nav hide"}>
        <div className="mini-nav-links">
          <h4 className="mini-links" onClick={() => navigate("/reviews")}>
            Reviews
          </h4>
          <h4 className="mini-links">About</h4>
          <h4 className="mini-links">Categories</h4>
          <h4 className="mini-links">Contact</h4>
        </div>

        <div className="mini-socials">
          <button className="mini-btn-socials">
            <FaFacebookF />
          </button>
          <button className="mini-btn-socials">
            <FaInstagram />
          </button>
          <button
            className="mini-btn-socials"
            onClick={() => navigate("/register")}
          >
            <HiOutlineLogin />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
