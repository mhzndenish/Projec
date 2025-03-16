import React from 'react'
import { Link } from 'react-router-dom';
import AdDisplayRight from '../AdDisplayRight';
import Footer from '../Footer';
import Navbar from '../navBar';
import Banner from '../Banner';

const KUProgramList=()=>{
    const kuPrograms = [
        { id: "bit", name: "BIT (Bachelor in Information Technology)" },
        { id: "be-mechanical", name: "BE Mechanical (BE in Mechanical Engineering)" },
        { id: "bbis", name: "BBIS (Bachelor of Business Information Systems)" },
        { id: "bsc-cs", name: "BSc CS (BSc in Computer Science)" },
        { id: "be-electrical", name: "BE Electrical Electronics (Bachelor of Engineering in Electrical and Electronics Engineering)" },
        { id: "mse-computer", name: "MSE Computer (Master of Science in Computer Engineering)" },
    ];
return(
    <>
    <Navbar/>
    <Banner/>
    <div className="program-list-container">
        <input type="text" placeholder='Search Program' className="search-bar" />
        <div className="content-wrapper">
            <div className="program-list-section">
                <ul className="program-list">
                    {kuPrograms.map((program, index)=>(
                        <li key={index} className="program-item">
                            <Link to={`/program/${program.id}`} className='program-link'>
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
 
) ;  
};

export default  KUProgramList;
  
