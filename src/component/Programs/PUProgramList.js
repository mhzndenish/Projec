import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navBar';
import Banner from '../Banner';
import AdDisplayRight from '../AdDisplayRight';
import Footer from '../Footer';

const PUProgramList=()=>{
    const puPrograms = [
        { id: "1", name: "BCA (Bachelor of Computer Application)" },
        { id: "be-mechanical", name: "BE Mechanical (Bachelor of Engineering in Mechanical Engineering)" },
        { id: "bcis", name: "BCIS (Bachelor of Computer Information System)" },
        { id: "be-it", name: "BE IT (Bachelor of Engineering in Information Technology)" },
        { id: "bcsit", name: "BCSIT (Bachelor of Computer System and Information Technology)" },
        { id: "mca", name: "MCA (Master of Computer Application)" },
        { id: "be-electrical-electronics", name: "BE Electrical and Electronics (Bachelor of Engineering in Electrical and Electronics Engineering)" },
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
                            <li key={index} className="program-item">
                                <Link to={`/program/${program.id}`} className='program-link'>
                                    {program.name}
                                </Link>

                            </li>
                        ))}
                    </ul>
                    <div className="pagination">
                        <span>Showing 1 to 100 results</span>
                        <div className="pagination-button">
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
export default  PUProgramList ;
