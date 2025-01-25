import React from 'react'
import "../css/ProgramOffered.css";
import bca from "../images/bca.png"; // Replace with actual image URL

const programs = [
    {
      title: "BCA - Bachelors in Computer Application",
      description:
        "BCA is an undergraduate degree program focused on computer science, software development, and IT. It typically covers subjects like programming languages, databases, web development, networking, and software engineering.",
      seats: "35 Students seats",
      duration: "4 years course",
      image: bca, // Replace with actual image URL
    },
    {
        title: "BCA - Bachelors in Computer Application",
        description:
          "BCA is an undergraduate degree program focused on computer science, software development, and IT. It typically covers subjects like programming languages, databases, web development, networking, and software engineering.",
        seats: "35 Students seats",
        duration: "4 years course",
        image: bca, // Replace with actual image URL
      },
      {
        title: "BCA - Bachelors in Computer Application",
        description:
          "BCA is an undergraduate degree program focused on computer science, software development, and IT. It typically covers subjects like programming languages, databases, web development, networking, and software engineering.",
        seats: "35 Students seats",
        duration: "4 years course",
        image: bca, // Replace with actual image URL
      },
      {
        title: "BCA - Bachelors in Computer Application",
        description:
          "BCA is an undergraduate degree program focused on computer science, software development, and IT. It typically covers subjects like programming languages, databases, web development, networking, and software engineering.",
        seats: "35 Students seats",
        duration: "4 years course",
        image: bca, // Replace with actual image URL
      },
    // Repeat this object for additional cards (as in the layout)
  ];
export default function ProgramOffered() {
  return (
    <div className="programs-container">
    <div className="program-header">
      <h1 className="title">
        Programs <span className="highlight">Offered</span>
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore veniam...
      </p>
    </div>
    <center>
    <div className="grid">
      {programs.map((program, index) => (
        <div
          key={index}
          className="card"
        >
          <img
            src={program.image}
            alt="Program"
            className="card-image"
          />
          <div className="card-content">
          <div className="card-info">
              <span>{program.seats}</span>
              <span>{program.duration}</span>
            </div>
            <h3 className="program-card-title">
              {program.title}
            </h3>
            <p className="card-description">{program.description}</p>
            
            <button className="more-button">
              More about it...
            </button>
          </div>
        </div>
      ))}
    </div>
    </center>
    <div className="explore-container">
      <button className="explore-button">
        Explore courses
      </button>
    </div>
  </div>
  )
}
