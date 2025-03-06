
import './App.css';
import React from 'react';
import AdLayout from './component/AdLayout';
import Banner from './component/Banner';
import Head from './component/Head';

import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import College from './component/College';
import Home from './component/Home';

import CollegeDetails from './component/College/CollegeDetails';
import Program from './component/Programs/Program';
import ProgramCourseView from './component/Programs/ProgramCourseView';
import TUProgramList from './component/Programs/TUProgramList';
import SyllabusList from './component/Syllabus/SyllabusList';
import SyllabusDetail from './component/Syllabus/SyllabusDetail';
import CourseView from './component/Course/CourseView';
import TuUniversityDetails from './component/University/TuUniversityDetails';
import KuUniversityDetails from './component/University/KuUniversityDetails';
import PuUniversityDetails from './component/University/PuUniversityDetails';
import PurUniversityDetails from './component/University/PurUniversityDetails';








const AppContent = () => {
  const location = useLocation();
  const showComponent = (location.pathname === "/Login" || location.pathname === "/Signup" ? false : true)

  return (
    <>
      <Head />
      

 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/College" element={<College />} />
        <Route path="/tuProgramList" element={<TUProgramList />} />
        {/* <Route path="College/:id" element={<CollegeViewById />} /> */}
        <Route path="College/:id" element={<CollegeDetails/>} />
        <Route path='/programOptions' element={<Program/>} />  
        <Route path="/program/:programId" element={<ProgramCourseView />} />

        {/* For Syllabus */}
        <Route path="/syllabus" element={<SyllabusList />} />
        <Route path="/syllabus/:id" element={<SyllabusDetail />} />

      {/* For training-course */}
      <Route path="/training-courses" element={<CourseView/>} />

      {/* For University details */}
      <Route path="/tribhuwan-university"element={<TuUniversityDetails/>} />
      <Route path="/kathmandu-university"element={<KuUniversityDetails/>} />
      <Route path="/pokhara-university"element={<PuUniversityDetails/>} />
      <Route path='/purbanchal-university'element={<PurUniversityDetails/>} />
      </Routes>






      {/* {showComponent &&
        <>
          <Navbar />
          <Banner />
          <AdLayout />
          <ProgramOffered />
          <Footer />
        
        </>
      } */}
    </>
  )
}
// const CollegeContent = () => {
//   const location = useLocation();
//   const showComponent = (location.pathname === "/Login" || location.pathname === "/Signup" ||location.pathname==="/College"? false : true)
//   return (
//     <>
//       <Head />
//       <Navbar />
//       <Banner />
//       <Routes>
//         {/* <Route path="/" element={<AppContent />} /> */}
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/College" element={<College />} />
//       </Routes>
//       {showComponent &&
//         <>
         
//           <AdLayout />
//           <ProgramOffered />
//           <Footer />
//           <College />
//         </>
//       }
//     </>
//   )
// }




function App() {

  return (
    <>
      <BrowserRouter>
        <AppContent />
        {/* <CollegeContent /> */}
      </BrowserRouter>



    </>


  );
}

export default App;
