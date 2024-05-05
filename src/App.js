import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
import LoadingBar from 'react-top-loading-bar';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

const App = () => {
  const [progress, setProgress] = useState(0);


  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          {/* <Route exact path="/" element={ <Home setProgress={setProgress}/> } />
					  <Route exact path="/aboutus" element={ <Aboutus setProgress={setProgress}/> } />
					  <Route exact path="/contactus" element={ <Contactus setProgress={setProgress}/> } />*/}
          {/* <Route exact path="" element={<RedirectToHomePage />} /> */}

          <Route exact path="" element={<RedirectToHomePage />} />
          <Route exact path="/fas" element={<RedirectToHomePage />} />
          <Route exact path="/fas/home" element={<Home setProgress={setProgress} />} />
          <Route exact path="/fas/login" element={<Login setProgress={setProgress} />} />
          <Route exact path="/fas/dashboard" element={<Dashboard setProgress={setProgress} />} />
          <Route exact path="/fas/aboutus" element={<Aboutus setProgress={setProgress} />} />
          <Route exact path="/fas/contactus" element={<Contactus setProgress={setProgress} />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )





}

function RedirectToHomePage() {
  const location = useLocation();

  // Check if the current route is '/page'
  if (location.pathname === '/fas' || location.pathname === '/fas/' || location.pathname === '')
   {
    return <Navigate to="/fas/home" replace />;
  }

  // Render null if not on '/page'
  return null;
}

export default App
