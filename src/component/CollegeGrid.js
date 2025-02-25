import React, { useState } from "react";
import "../css/CollegeGrid.css";
import acem from "../images/acem.png"; // Example image
import instagramIcon from "../images/instagram.png"; // Example icon
import linkedinIcon from "../images/linkedin.png"; // Example icon


const colleges = [
  {
    name: "Advance College of Engineering & Management",
    location: "Kalanki, Kathmandu, Nepal",
    description:
      "ACEM is re-engineering its processes, delivery, & overall approach to lead in any unprecedented situation.",
    image: acem,
    website: "https://acem.edu.np",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com", icon: instagramIcon },
      { platform: "linkedin", url: "https://linkedin.com", icon: linkedinIcon },
    ],
  },
  {
    name: "Stanford University",
    location: "Stanford, California, USA",
    description: "Stanford University is a leading research university known for its academic excellence and innovation.",
    image: acem, // Replace with the actual image for Stanford
    website: "https://www.stanford.edu",
    socialLinks: [
      { platform: "instagram", url: "https://facebook.com/stanford", icon: instagramIcon },
      { platform: "linkedin", url: "https://twitter.com/stanford", icon: linkedinIcon },
    ],
  },
  {
    name: "Institute of Engineering, IOE",
    location: "Pulchowk, Lalitpur, Nepal",
    description: "The Institute of Engineering (IOE) is a constituent institute of Tribhuvan University renowned for its engineering and technology programs.",
    image: acem,
    website: "https://www.ioe.edu.np/",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/ioe.pulchowk/", icon: instagramIcon },
      { platform: "twitter", url: "https://twitter.com/ioepulchowk", icon: linkedinIcon },
    ],
  },
  {
    name: "Kathmandu University",
    location: "Dhulikhel, Kavrepalanchwok, Nepal",
    description: "Kathmandu University is a public university known for its focus on science, engineering, and medicine. It was established in 1991.",
    image: acem, // Replace with appropriate image name
    website: "https://www.ku.edu.np/",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/groups/304572156768024/", icon: instagramIcon },
      { platform: "twitter", url: "https://x.com/ku_dhulikhel?lang=en", icon: linkedinIcon },
    ],
  },
];

export default function CollegeGrid() {
  const [showMore, setShowMore] = useState(false);
  const itemsPerPage = 3;

  const handleSeeMore = () => {
    setShowMore(true);
  };

  const visibleColleges = showMore ? colleges : colleges.slice(0, itemsPerPage);

  return (
    <div className="collegebody">
      <div className="grid-container">
        <h1 className="title">Colleges In Nepal</h1>
        <p className="text">
          See the colleges available in Nepal. Maybe some could grab your
          interest.
        </p>

        <div className="card-container">
          {visibleColleges.map((college, index) => (
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

        {!showMore && (
          <button className="see-more-button" onClick={handleSeeMore}>
            See More
          </button>
        )}

        
      </div>
    </div>
  );
}