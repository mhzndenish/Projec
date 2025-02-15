
import './App.css';
import AdLayout from './component/AdLayout';
import Banner from './component/Banner';
import Head from './component/Head';
import Navbar from './component/navBar';
import ProgramOffered from './component/ProgramOffered';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <>
    <BrowserRouter>
     <Head/>
     <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    <Navbar/>
    <Banner/>
    <AdLayout/>
    <ProgramOffered/>
   <Footer/>
   </BrowserRouter>
 
 
   
    </>
    
    
  );
}

export default App;
