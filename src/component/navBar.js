import React from 'react'
import"../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-menu">
      <li><a href="#courses">Courses</a></li>
      <li><a href="#colleges">Colleges</a></li>
      <li><a href="#degrees">Degrees</a></li>
      <li><a href="#exams">Exams</a></li>
      <li><a href="#schools">Schools</a></li>
      <li><a href="#admissions">Admissions</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#blogs">Blogs</a></li>
      <li><a href="#skills">Skills</a></li>
      <li className="dropdown">
        <a href="#more">More</a>
        {/* Dropdown content */}
        <div className="dropdown-content">
          <a href="#option1">Option 1</a><br/>
          <a href="#option2">Option 2</a>
        </div>
      </li>
    </ul>
  </nav>
  )
}
