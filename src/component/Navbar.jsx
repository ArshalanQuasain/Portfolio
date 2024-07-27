import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../Image/logo.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Collapse the navbar when the location changes
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // Collapse the navbar when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target) && menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setExpandNavbar(false);
      }
    };

    const handleScroll = () => {
      if (expandNavbar) {
        setExpandNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expandNavbar]);

  // Toggle the expanded state of the navbar
  const handleMenuToggle = () => {
    setExpandNavbar((prev) => !prev);
  };


  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-gray-800 text-lg py-3 px-6 bg-gray-200 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300"
      : "text-gray-800 text-lg py-3 px-6 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300";
  };

  return (
    <div className="w-full h-20 bg-white shadow-md rounded-b-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex-shrink-0">
          <img src={logo} alt="Profile" className="h-12 object-cover" />
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/Skill" className={getLinkClass("/Skill")}>
            Skill
          </Link>
          <Link to="/Project" className={getLinkClass("/Project")}>
            Project
          </Link>
          <Link to="/Experience" className={getLinkClass("/Experience")}>
            Experience
          </Link>
          <Link to="/Contact" className={getLinkClass("/Contact")}>
            Contact
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            ref={menuButtonRef}
            onClick={handleMenuToggle}
            className="p-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-300 transition duration-300 focus:outline-none"
          >
            <FaBars className="text-3xl" />
          </button>
        </div>
      </div>
      {expandNavbar && (
        <div
          ref={drawerRef}
          className="lg:hidden fixed rounded-b-lg border-b border-l top-20 right-0 w-60 bg-white shadow-md border-t border-gray-200 flex flex-col items-center space-y-4 py-6 z-50"
        >
          <Link to="/" onClick={() => setExpandNavbar(false)} className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/Skill" onClick={() => setExpandNavbar(false)} className={getLinkClass("/Skill")}>
            Skill
          </Link>
          <Link to="/Project" onClick={() => setExpandNavbar(false)} className={getLinkClass("/Project")}>
            Project
          </Link>
          <Link to="/Experience" onClick={() => setExpandNavbar(false)} className={getLinkClass("/Experience")}>
            Experience
          </Link>
          <Link to="/Contact" onClick={() => setExpandNavbar(false)} className={getLinkClass("/Contact")}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
