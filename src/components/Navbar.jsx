import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚗 <span>Wheelzy</span>
      </div>

      <div className="nav-links">
        <a href="#">Vehicles</a>
        <a href="#">Drivers</a>
        <a href="#">My Bookings</a>
        <a href="#">About</a>
      </div>

      <div className="nav-right">
        <button className="driver-btn">Become a Driver</button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;