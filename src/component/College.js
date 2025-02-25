import React, { useState } from "react";
import "../css/College.css";
import acem from "../images/acem.png";
import Navbar from "./navBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";



export const colleges = [
  {  
    id:1,
    name: "Advance College of Engineering & Management",
    university: "Tribhuvan University",
    address: "Kalanki, Kathmandu, Nepal",
    image: acem,
    discipline: "Technology",
    website: "https://acem.edu.np",
   
  },
  {
    id: 2,
    name: "Padmashree College",
    university: "Tribhuvan University",
    address: "Tinkune, Kathmandu",
    website: "padmashreecollege.edu.np",
    discipline: "Technology",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Texas International College",
    university: "Tribhuvan University",
    address: "Mitrapark, Chabahil, Kathmandu",
    website: "texascollege.edu.np",
    discipline: "Science",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Thames International College",
    university: "Tribhuvan University",
    address: "Surya Bikram Gyawali Marg, Old Baneshwor, Kathmandu",
    website: "thamescollege.edu.np",
    discipline: "Business",
    image: "https://via.placeholder.com/300x200",
  },
];

const disciplines = ["All", "Business", "Technology", "Science"];

const College = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState("All");

  const filteredColleges =
    selectedDiscipline === "All"
      ? colleges
      : colleges.filter((college) => college.discipline === selectedDiscipline);

  return (
    <>
      <Navbar />
    <div className="college-container">
      <div className="filter-section">
        <label htmlFor="discipline">Discipline:</label>
        <select
          id="discipline"
          value={selectedDiscipline}
          onChange={(e) => setSelectedDiscipline(e.target.value)}
        >
          {disciplines.map((discipline, index) => (
            <option key={index} value={discipline}>
              {discipline}
            </option>
          ))}
        </select>
      </div>

      <div className="college-grid">
        {filteredColleges.map((college, index) => (
          <Link to={`/College/${college.id}`}>
          <div className="college-card" key={index} >
            <img src={college.image} alt={college.name} className="college-image" />
            <div className="college-info">
              <h3>{college.name}</h3>
              <p>{college.university}</p>
              <p>{college.address}</p>
              <a href={`https://${college.website}`} target="_blank" rel="noopener noreferrer">
                {college.website}
              </a>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default College;
