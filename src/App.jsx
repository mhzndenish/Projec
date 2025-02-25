
import './App.css';
import React from 'react';
import AdLayout from './component/AdLayout';
import Banner from './component/Banner';
import Head from './component/Head';
import Navbar from './component/navBar';
import ProgramOffered from './component/ProgramOffered';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import College from './component/College';
import Home from './component/Home';
import CollegeViewById from './component/College/CollegeViewById';


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
        <Route path="College/:id" element={<CollegeViewById />} />
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
