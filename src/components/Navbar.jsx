import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - WHEELZY LOGO */}
      <div className="navbar-logo">
        <img
          src="/images/wheelzy-logo.png"
          alt="Wheelzy Logo"
        />
      </div>

      {/* CENTER - NAVIGATION */}
      <div className="navbar-links">
        <a href="#home" className="active">
          Home
        </a>

        <a href="#vehicles">
          Vehicles
        </a>

        <a href="#drivers">
          Drivers
        </a>

        <a href="#about">
          About
        </a>
      </div>

      {/* RIGHT - ACTION BUTTONS */}
      <div className="navbar-actions">

        <button className="driver-btn">
          👨‍✈️ Become a Driver
        </button>

        <button className="login-btn">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;