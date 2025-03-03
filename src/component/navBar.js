import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="dropdown">
          <Link to="/College">Colleges</Link>
        </li>
        <li className="dropdown">
          <span>Programs</span>
          <div className="dropdown-content">
            <Link to="/programList">Tu Program</Link>
            <Link to="/ku-programs">KU Program</Link>
            <Link to="/pu-programs">PU Program</Link>
            <Link to="/pu-pokhara-programs">PU (Pokhara) Program</Link>
          </div>
        </li>
        <li className="dropdown">
          <span>University</span>
          <div className="dropdown-content">
            <Link to="/tribhuwan-university">Tribhuwan University</Link>
            <Link to="/kathmandu-university">Kathmandu University</Link>
            <Link to="/pokhara-university">Pokhara University</Link>
            <Link to="/purbanchal-university">Purbanchal University</Link>
          </div>
        </li>
        <li>
          <Link to="/syllabus">Syllabus</Link>
        </li>
        <li className="dropdown">
          <span>Resources</span>
          <div className="dropdown-content">
            <Link to="/notes">Notes</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </li>
        <li>
          <Link to="/training-courses">Training/Courses</Link>
        </li>
      </ul>
    </nav>
  );
}