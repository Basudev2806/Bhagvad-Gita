import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    const body = document.body;
    body.classList.toggle("night-mode");
  };

  return (
    <nav className={`navbar ${isNightMode ? "night-mode" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bhagavad Gita
        </Link>
        <div className="left-section">
          <div className="mode-icons">
            <FontAwesomeIcon
              icon={isNightMode ? faSun : faMoon}
              className="mode-icon"
              onClick={toggleNightMode}
            />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
          <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
                <Link to="/" className="navbar-link" onClick={toggleMenu}>
                Home
                </Link>
            </li>
            <li className="navbar-item">
                <Link to="/hanuman-chalisa" className="navbar-link" onClick={toggleMenu}>
                Hanuman Chalisa
                </Link>
            </li>
         </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
