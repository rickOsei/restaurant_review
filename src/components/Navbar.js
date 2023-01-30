import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <h2>
          Res<span className="logo-span">Review</span>
        </h2>
      </div>
      <div className="nav-links">
        <h4 className="links">Categories</h4>
        <h4 className="links">About</h4>
        <h4 className="links">Newsletter</h4>
        <h4 className="links">Contact</h4>
      </div>
      <div className="socials">
        <button className="btn-socials">
          <FaFacebookF />
        </button>
        <button className="btn-socials">
          <FaInstagram />
        </button>
        <button className="btn-socials">
          <HiOutlineLogin />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
