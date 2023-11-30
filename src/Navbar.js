// import React from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import your CSS file

// const Navbar = () => {
//   return (
//     <BootstrapNavbar bg="transparent" expand="lg" fixed="top">
//       {/* <BootstrapNavbar.Brand as={Link} to="/">Your Logo</BootstrapNavbar.Brand> */}
//       <BootstrapNavbar.Toggle aria-controls="navbarNav" />
//       <BootstrapNavbar.Collapse id="navbarNav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
//           <Nav.Link as={Link} to="/about" className="nav-link">About Us</Nav.Link>
//           <Nav.Link as={Link} to="/family-tree" className="nav-link">Family Tree</Nav.Link>
//           <Nav.Link as={Link} to="/how-it-works" className="nav-link">How it works</Nav.Link>
//           <Nav.Link as={Link} to="/download" className="nav-link">Download</Nav.Link>
//           <Nav.Link as={Link} to="/contact" className="nav-link">Contact Us</Nav.Link>
//         </Nav>
//       </BootstrapNavbar.Collapse>
//     </BootstrapNavbar>
//   );
// };

// export default Navbar;

//nav links left
// import React from 'react';
// import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '/home/student/Begin/truestory/src/Navbar.css'

// const Navbar = () => {
//   return (
//     <BootstrapNavbar bg="transparent" expand="lg" fixed="top">
//       {/* <BootstrapNavbar.Brand as={Link} to="/">Your Logo</BootstrapNavbar.Brand> */}
//       <BootstrapNavbar.Toggle aria-controls="navbarNav" />
//       <BootstrapNavbar.Collapse id="navbarNav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/">Home</Nav.Link>
//           <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//           <Nav.Link as={Link} to="/family-tree">Family Tree</Nav.Link>
//           <Nav.Link as={Link} to="/how-it-works">How it works</Nav.Link>
//           <Nav.Link as={Link} to="/download">Download</Nav.Link>
//           <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//         </Nav>
//       </BootstrapNavbar.Collapse>
//     </BootstrapNavbar>
//   );
// };

// export default Navbar;

//use incase
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
        How It Works
        </a>
        <a href="#download" className="navbar-link">
          Downloads
        </a>
        <a href="#your-story" className="navbar-link">
        Your Story
        </a>
        <a href="#contactUs" className="navbar-link">
        Contact Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;




//not use
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