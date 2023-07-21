import React from "react";
import "./header.css";
import Logo from "./";

function Header() {
  return (
    <>
      <div className="header-container">
        <nav className="content-navbar">
          <div className="logo-navbar">
            <a href="/" className="navbar-logo-link">
              <img src={Logo} alt=""></img>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
