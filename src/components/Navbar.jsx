import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 flex justify-between items-center">
      {/* Logo or Brand Name (adjust as needed) */}
      <div className="navbar-logo text-white font-bold text-lg">greff</div>

      {/* Navigation Buttons */}
      <div className="navbar-links flex items-center space-x-4">
        {/* Additional Navigation Links if needed */}
        {/* <a href="#" className="navbar-link text-white hover:text-gray-300">Link 1</a>
        <a href="#" className="navbar-link text-white hover:text-gray-300">Link 2</a> */}

        {/* Login Button */}
        <button className="navbar-button text-white hover:text-gray-300">Login</button>

        {/* User Details Button */}
        <button className="navbar-button text-white hover:text-gray-300">User Details</button>
      </div>
    </nav>
  );
};

export default NavBar;
