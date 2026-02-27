import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Quick Travel 🚦</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
      </div>
    </nav>
  );
}

export default Navbar;