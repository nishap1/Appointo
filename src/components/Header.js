import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/logo.svg" alt="Company Logo" className="logo" />
        <div>
          <h1 className="company-name">Talent31</h1>
          <p className="slogan">YOUR SLOGAN GOES HERE</p>
        </div>
      </div>
      <nav className="header-right">
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
        <a href="#" className="contact-link">
          Contact us
        </a>
        <a href="#" className="share-link">
          <svg
            className="share-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m7-7H5"
            ></path>
          </svg>
          Share Link
        </a>
      </nav>
    </header>
  );
};

export default Header;
