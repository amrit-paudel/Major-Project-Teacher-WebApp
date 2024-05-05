import React from 'react'

const Footer = () => {
  return (
    <footer className="container-fluid  bg-light text-center text-lg-start ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12  ">
            <div className="d-flex justify-content-center">
              <img src="../tu_logo.svg" alt="Company Logo" className="img-fluid footer-logo" style={{ height: "90px", marginTop: "10px" }} />
            </div>
          </div>
          <div className=" col-lg-6 col-md-12 text-center">
            <div className="social-icons mt-2">
              <a href="https://facebook.com/raazkhnl" className="social-icon mx-3" rel="noreferrer" target="_blank"><i className="fas fa-globe" /></a>
              <a href="mailto:info@pcampus.edu.np" className="social-icon mx-3" rel="noreferrer" target="_blank"><i className="fa fa-at" /></a>
              <a href="tel:+9771-5543078" className="social-icon mx-3" rel="noreferrer" target="_blank"><i className="fa fa-phone" /></a>
            </div>
            <p>Pulchowk Campus Lalitpur <br />Contact No: +9771-5543078</p>
          </div>
        </div>
      </div>
      {/* <div className="row text-center "><p>&copy; 2023 <a href="https://github.com/raazkhnl" style={{textDecoration:'none', color:"hsl(345, 100%, 2%)", fontSize:'20px'}}>RaaZ Khanal Co.</a> All rights reserved.</p></div> */}
    </footer>

  )
}

export default Footer