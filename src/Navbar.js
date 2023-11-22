import React from 'react';

import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      
      </div>
      <div className="navbar-right">
      <a href="/" className="navbar-link">
        Home
        </a>
        <a href="#about-page" className="navbar-link">
        About Us 
        </a>
        <a href="#family-tree" className="navbar-link">
        Family Tree
        </a>
        <a href="#events" className="navbar-link">
        Events
        </a>
        <a href="#download" className="navbar-link">
          Downloads
        </a>
        <a href="#contactUs" className="navbar-link">
        Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         {/* Add any left-side elements if needed */}
//       </div>
//       <div className="navbar-right">
//         <Link to="/about-page" className="navbar-link">
//           About Us
//         </Link>
//         <Link to="/family-tree" className="navbar-link">
//           Family Tree
//         </Link>
//         <Link to="/events" className="navbar-link">
//           Events
//         </Link>
//         <Link to="/download" className="navbar-link">
//           Downloads
//         </Link>
//         <Link to="/contact-us" className="navbar-link">
//           Contact Us
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;