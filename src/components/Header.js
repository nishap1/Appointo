import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.svg" alt="Company Logo" className="logo" />
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <button className="menu-button">
            Menu
            <span>
              <svg
                className="dropdown-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
          <button className="menu-button">Contact us</button>

          <button href="#" className="share-link">
            <img src="/external-link.png" alt="share-link" />
            Share Link
          </button>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
