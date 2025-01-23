import React from "react";
import "../css/CollegeGrid.css";
import arrowleft from "../images/arrowleft.png";
import arrowright from "../images/arrowright.png";
import acem from "../images/acem.png"; // Importing the college image
import instagramIcon from "../images/instagram.png"; // Importing the Instagram icon
import linkedinIcon from "../images/linkedin.png"; // Importing the LinkedIn icon

const colleges = [
  {
    name: "Advance College of Engineering & Management",
    location: "Address to be added here",
    description:
      "ACEM is re-engineering its processes, delivery, & overall approach to lead in any unprecedented situation.",
    image: acem, // Using the imported image
    website: "https://acem.edu.np", // Website URL for the college
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com", icon: instagramIcon },
      { platform: "linkedin", url: "https://linkedin.com", icon: linkedinIcon },
    ],
  },
  {
    name: "Stanford University",
    location: "Stanford, California, USA",
    description: "Stanford University is a leading research university known for its academic excellence and innovation.",
    image: acem, // Using the imported image
    website: "https://www.stanford.edu",
    socialLinks: [
      { platform: "instagram", "url": "https://facebook.com/stanford", icon: instagramIcon },
      { platform: "linkedin", "url": "https://twitter.com/stanford", icon: linkedinIcon }
    ]
  },
  {
    name: "InstituteofEngineeringIOE", 
    location: "PulchowkLalitpurNepal", 
    description: "TheInstituteofEngineeringIOEisaconstituentinstituteofTribhuvanUniversityrenownedforitsengineeringandtechnologyprograms.",
    image: acem, 
    website: "https://www.ioe.edu.np/",
    socialLinks: [
      { platform: "facebook", "url": "https://www.facebook.com/ioe.pulchowk/", icon: instagramIcon }, 
      { platform: "twitter", "url": "https://twitter.com/ioepulchowk", icon: linkedinIcon } 
    ]
  }
  // Add more colleges as needed
];

export default function CollegeGrid() {
  return (
    <div className="collegebody">
      <div className="grid-container">
        <h1 className="title">Colleges In Nepal</h1>
        <div className="button-group">
          <button className="action-button">
            <img src={arrowleft} alt="backward" className="button-icon-left" />
          </button>
          <button className="action-button">
            <img src={arrowright} alt="forward" className="button-icon-right" />
          </button>
        </div>
        <p className="text">
          See the colleges available in Nepal. Maybe some could grab your interest.
        </p>
        <br />

        <div className="card-container">
          {colleges.map((college, index) => (
            <div className="card" key={index}>
              <img
                src={college.image}
                alt={college.name}
                className="college-image"
              />
              <div className="college-info">
                <h2 className="college-name">{college.name}</h2>
                <p className="college-location">{college.location}</p>
                <p className="college-description">{college.description}</p>
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="college-website"
                >
                  {college.website}
                </a>
                <div className="social-icons">
                  {college.socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                    >
                      <img
                        src={link.icon}
                        alt={link.platform}
                        className="social-icon"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Load More..</button>
      </div>
    </div>
  );
}
