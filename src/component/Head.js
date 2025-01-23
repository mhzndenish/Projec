import React from 'react'
import"../css/Header.css";
import search from '../images/search.png';


export default function Head() {
    return (
        <header className="header">
          <div className="header-logo">
            <span className="brand">ENTRANCE</span> <span className="highlight">GATEWAY</span>
          </div>
          <div className="header-search">
        <div className="search-container">
          <img src={search} alt="Search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="What do you want to learn"
          />
          <button className="search-button">Search Course</button>
        </div>
      </div>
          <div className="header-buttons">
            <button className="btn btn-outline-primary">Sign in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </header>
      );
}
