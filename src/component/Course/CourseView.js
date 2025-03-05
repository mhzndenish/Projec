import React from 'react';
import "../../css/Training/CourseView.css";
import child from "../../images/child.png"; // Replace with actual image URL
import Navbar from '../navBar';
import Footer from '../Footer';
const courses = [
  {
    title: "Cyber Security",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: child, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  },
  {
    title: "Cyber Law",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: child, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  },
  {
    title: "Cloud Computing",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: child, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  }
];

export default function Courseview() {
  return (
    <>
    <Navbar />
    <div className="training-courses">
      
      <div className="training-course-container">
        {courses.map((course, index) => (
          <div key={index} className="training-course-card">
            {/* Course Image */}
            <img src={course.image} alt={course.title} className="training-course-image" />

            {/* Course Content */}
            <div className="training-course-content">
              {/* Title and Rating */}
              <div className="training-course-header">
                <h3>{course.title}</h3>
                <div className="training-course-rating">{"⭐".repeat(Math.round(course.rating))}</div>
              </div>

              {/* Course Details */}
              <div className="training-course-details">
                <p>⏱ {course.duration}</p>
                <p>🎥 {course.videos}</p>
                <p>📊 {course.downloads}</p>
              </div>

              {/* Join Button */}
              <button className="training-join-button">Join Course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}