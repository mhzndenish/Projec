import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../css/TUProgramList.css';
import Head from '../Head';
import Navbar from '../navBar';
import AdDisplayRight from '../AdDisplayRight'; // Import the AdDisplayRight component
import Footer from '../Footer';
import Banner from '../Banner';

const ProgramList = () => {
  const programs = [
    { id: "1", name: "BCA (Bachelor of Computer Application)" },
    { id: "2", name: "BE Mechanical (BE in Mechanical Engineering)" },
    { id: "bim", name: "BIM (Bachelor of Information Management)" },
    { id: "bit", name: "BIT (Bachelor in Information Technology)" },
    { id: "bsc-csit", name: "BSc CSIT (BSc Computer Science and Information Technology)" },
    { id: "mca", name: "MCA (Master of Computer Application)" },
    { id: "be-electrical", name: "BE Electrical Electronic (Bachelor of Engineering in Electrical and Electronics Engineering)" },
  ];

  return (
    <>
      
      <Navbar />
      <Banner />

      <div className="program-list-container">
        <input type="text" placeholder="Search Programs" className="search-bar" />
        <div className="content-wrapper">
          <div className="program-list-section">
            <ul className="program-list">
              {programs.map((program, index) => (
                <li key={index} className="program-item">
                  <Link to={`/program/${program.id}`} className="program-link"> {/* Use Link */}
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pagination">
              <span>Showing 1 to 100 of results</span>
              <div className="pagination-buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>100</button>
                <button>Next</button>
              </div>
            </div>
          </div>
          <AdDisplayRight /> {/* AdDisplayRight aligned to the right */}
          
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default ProgramList;