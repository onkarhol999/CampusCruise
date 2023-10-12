import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://tse3.mm.bing.net/th?id=OIP.VyXvP7iPxMLz9PorI_rJPQHaEo&pid=Api&P=0&h=180" alt="Campus Cruise Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
