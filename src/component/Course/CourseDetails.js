import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get courseId
import "../../css/Training/CourseDetails.css";
import course from "../../images/course.png";
import Footer from "../Footer";
import Navbar from "../navBar";

// Mock course data (replace with actual data fetching logic)
const courses = [
  {
    id: 1,
    title: "Cyber Security",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: course, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  },
  {
    id: 2,
    title: "Cyber Law",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: course, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  },
  {
    id: 3,
    title: "Cloud Computing",
    duration: "5hr 30min",
    videos: "10 Videos",
    sales: "444 Sales",
    image: course, // Replace with actual image URL
    rating: 4.5,
    downloads: "444 sales"
  }
];

const CourseDetails = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const course = courses.find((c) => c.id === parseInt(courseId)); // Find the course by ID

  if (!course) {
    return <div>Course not found!</div>; // Handle case where course is not found
  }

  return (
    <>
      <Navbar />
      <div>
        {/* UI/UX Training Section */}
        <div className="trainings-container">
          <div className="trainings-content">
            {/* Left Section */}
            <div className="trainings-text">
              <h2>{course.title}</h2>
              <div className="trainings-info">
                <span>📅 {course.duration}</span>
                <span>🎨 UI/UX DESIGNER</span>
                <span>🔗 Share with your Friends</span>
              </div>
              <p>Training Mode: Both Physical & Live Online Classes, including Online Live Night Classes</p>
              <p>UI/UX Design Training in Kathmandu, Nepal</p>
              <div className="trainings-buttons">
                <button className="enroll-btn">Enroll Now</button>
                <button className="enquiry-btn">Send Enquiry</button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="trainings-image">
              <img src={course.image} alt={course.title} />
            </div>
          </div>
        </div>

        {/* Navbar for Course Sections */}
        <nav className="trainings-course-navbar">
          <ul>
            <li><a href="#overview">Course Overview</a></li>
            <li><a href="#benefits">Course Benefits</a></li>
            <li><a href="#syllabus">Syllabus</a></li>
            <li><a href="#success">Success Stories</a></li>
          </ul>
        </nav>

        {/* Course Overview Section */}
        <div className="trainings-course-container">
          <div className="trainings-course-content">
            {/* Left Section - Course Overview and Benefits */}
            <div className="trainings-course-text">
              <h2 id="overview">Course Overview</h2>
              <h3>{course.title}</h3>
              <p>
                Entrance Gateway offers a world-class UI/UX design training in Nepal to help aspiring designers develop essential design skills.
                The course aims to enhance design skills by implementing a CX-centric approach.
              </p>

              <h2 id="benefits">Benefits</h2>
              <h3>Benefits of {course.title}</h3>
              <p>
                UI/UX is a critical phase in software and web application development. The course offers the following key benefits:
              </p>
              <ul>
                <li>Understand the fundamental principles of UI/UX design.</li>
                <li>Learn design thinking processes and key UI/UX tools.</li>
                <li>Develop wireframes and prototypes before product development.</li>
                <li>Differentiate between UI/UX and CX (Customer Experience).</li>
                <li>Master impactful visual design for communication.</li>
                <li>Stay updated with the latest UI/UX design trends.</li>
                <li>Career opportunities in UI/UX design, branding, and creative fields.</li>
              </ul>
            </div>

            {/* Right Section - Ad Display */}
            <div className="course-ads">
              <div className="ad-box">Ad Display</div>
              <div className="ad-box">Ad Display</div>
              <div className="ad-box">Ad Display</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;