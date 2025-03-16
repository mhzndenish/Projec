import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navBar';
import Banner from '../Banner';
import AdDisplayRight from '../AdDisplayRight';
import Footer from '../Footer';

const PurProgranList=()=>{
    const puPrograms = [
        { id: "bca", name: "BCA (Bachelor of Computer Application)", syllabus: "https://pusat.edu.np/program/bachelor-in-computer-applicationbca/" },
        { id: "be-mechanical", name: "BE Mechanical (Bachelor of Engineering in Mechanical Engineering)", syllabus: "https://pu.edu.np/academics/programs/engineering/be-mechanical-engineering/" },
        { id: "bim", name: "BIM (Bachelor of Information Management)", syllabus: "https://pu.edu.np/academics/programs/management/bim/" },
        { id: "bit", name: "BIT (Bachelor in Information Technology)", syllabus: "https://pu.edu.np/academics/programs/it/bachelor-in-information-technology-bit/" },
        { id: "bsc-csit", name: "BSc CSIT (BSc in Computer Science and Information Technology)", syllabus: "https://pu.edu.np/academics/programs/science-and-technology/bsc-csit/" },
        { id: "mca", name: "MCA (Master of Computer Application)", syllabus: "https://edusanjal.com/course/master-of-computer-application-purbanchal-university/" },
        { id: "be-electrical", name: "BE Electrical (Bachelor of Engineering in Electrical and Electronics Engineering)", syllabus: "https://pu.edu.np/academics/programs/engineering/be-electrical-and-electronics-engineering/" },
    ];
    return(
        <>
        <Navbar/>
        <Banner/>
        <div className="program-list-container">
            <input type="text" placeholder='Search Programs' className="search-bar" />
            <div className="content-wrapper">
                <div className="program-list-section">
                    <ul className="program-list">
                        {puPrograms.map((program, index)=>(
                            <li key={index} className='program-item'>
                                <Link to={`/program/${program.id}`}className='program-link'>
                                    {program.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="pagination">
                        <span>Showing 1 to 100 results</span>
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
                <AdDisplayRight/>
            </div>
        </div>
        <Footer/>
        </>
    )
    
}

export default  PurProgranList;
