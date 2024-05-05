import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      // Redirect to login page
      window.location.href = 'login';
    } else {
      // Logout and change button text add logout logic,ie. checking for local storage
      setIsLoggedIn(false);
    }
  }
    return (
      <nav className="navbar navbar-expand-lg  bg-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/fas"><img style={{ width: "40px" }} src="../tu_logo.svg" alt="icon" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <div className=" " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className={`nav-link ${location.pathname === "/fas/home" ? "active" : ""}`} aria-current="page" to="/fas">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${location.pathname === "/fas/aboutus" ? "active" : ""}`} to="/fas/aboutus">About Us</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className={`nav-link ${location.pathname === "/fas/contactus" ? "active" : ""}`} to="/fas/contactus">Contact Us</Link>
              </li>
            </ul>
            <button className="btn " style={{ backgroundColor: 'lightblue' }} type="button" onClick={handleClick}>
              {isLoggedIn ? 'Logout' : 'Login'} <i class="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>

    )
  }

  export default Navbar

