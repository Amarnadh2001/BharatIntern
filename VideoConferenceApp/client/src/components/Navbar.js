import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="navbar-container">
    <div className="navbar-content">
    <div className="bg-white/90">
      <div className=" h-[5rem] flex items-center justify-between px-0 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-black font-bold">
            <p className="text-[21px] pl-1">Video Call</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-black font-bold flex items-center gap-4 cursor-pointer nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>
              <button className="dropdown-button" onClick={toggleDropdown}>
                Sign Up / Sign In
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/signin">Sign In</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
