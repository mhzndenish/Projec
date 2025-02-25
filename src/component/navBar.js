import React from 'react'
import"../css/Navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-menu">
      <li><a href="#courses">Courses</a></li>
      <li className="dropdown">
        <Link to="/College">
        <a href="#Colleges">Colleges</a>
        </Link>
      </li>
      <li className="dropdown">
        <a href="#Notes">Notes</a>
        {/* Dropdown content */}
        <div className="dropdown-content">
          <a href="#option1">BCA</a><br/>
          <a href="#option2">BSc.CSIT</a><br/>
          <a href="#option3">BIM</a><br/>
          <a href="#option4">BBS</a><br/>
          <a href="#option5">Others</a><br/>
        </div>
      </li>
      <li className="dropdown">
        <a href="#Syllabus">Syllabus</a>
        {/* Dropdown content */}
        <div className="dropdown-content">
        <a href="#option1">BCA</a><br/>
          <a href="#option2">BSc.CSIT</a><br/>
          <a href="#option3">BIM</a><br/>
          <a href="#option4">BBS</a><br/>
          <a href="#option5">Others</a><br/>
        </div>
      </li>
      <li className="dropdown">
        <a href="#Universities">Universities</a>
        {/* Dropdown content */}
        <div className="dropdown-content">
        <a href="#option1">Tribhuwan University</a><br/>
          <a href="#option2">Kathmandu University</a><br/>
          <a href="#option3">Pokhara University</a><br/>
          <a href="#option4">Purbanchal University</a><br/>
          <a href="#option5">Others</a><br/>
        </div>
      </li>
      <li><a href="{Recent}" >Blogs </a></li>
      
     
    </ul>
  </nav>
  )
}