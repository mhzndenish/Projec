import React from 'react';
import "../css/FeatureCourses.css";
import child from "../images/child.png"; // Replace with actual image URL
import Group from "../images/Group.png"; // Replace with actual image URL
import ProgramOffered from './ProgramOffered';



const courses = [
    {
        title: "Cloud Computing",
        duration: "5hr 30min",
        videos: "10 Videos",
        sales: "444 Sales",
        image: child, // Replace with actual image URL
        rating: 4.5,
        downloads:"444 sales"
    },
    {
        title: "Cyber Law",
        duration: "5hr 30min",
        videos: "10 Videos",
        sales: "444 Sales",
        image: child, // Replace with actual image URL
        rating: 4.5,
        downloads:"444 sales"
    },
    {
        title: "Cloud Computing",
        duration: "5hr 30min",
        videos: "10 Videos",
        sales: "444 Sales",
        image: child, // Replace with actual image URL
        rating: 4.5,
        downloads:"444 sales"
    },
];

export default function FeatureCourses() {
  const Image=Group // Replace with actual image URL
 
    return (
        <div className="feature-courses">
            <h2>Feature Courses</h2>
            <p>Learn at your own pace to make a greater difference for yourself.</p>
            <div className="course-container">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        {/* Course Image */}
                        <img src={course.image} alt={course.title} className="course-image" />

                        {/* Course Content */}
                        <div className="course-content">
                            {/* Title and Rating */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>{course.title}</h3>
                                <div className="course-rating">{"⭐".repeat(Math.round(course.rating))}</div>
                            </div>

                            {/* Dotted Line Separator */}
                            <div className="course-details">
                                <p>⏱ {course.duration}</p>
                                <p>🎥 {course.videos}</p>
                                
                                <p><img src={Image} alt="download icon" />  {course.downloads}</p>
                            </div>

                            {/* Join Button */}
                            <button className="join-button">Join Course</button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* <div className="program">
            <ProgramOffered/>
            </div> */}
        </div>
        
    );
}
