import React, { useEffect } from 'react'

const Aboutus = (props) => {

  //Just for loadingbar
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setProgress(80);
      setTimeout(() => {
        props.setProgress(100);
      }, 10);
    }, 10);
      return () => clearTimeout(timer);
      // eslint-disable-next-line
  }, []);

  return (
<div className="container text-center">
  <div className="container text-center" >
    <div className="row">
      <div className="col-lg-12 mt-3 px-5">
        <h3>About Us</h3>
    
  <img src="../tu_logo.svg" className="img-fluid rounded-circle" alt="Chefs" style={{height:"150px"}}/>


        <p className="mb-4">Welcome to FAS,the effortless attendance tracking system, so you can focus on what matters most.</p>
        <hr />
        <h3>Our Objectives</h3>
        <ul className="list-unstyled">
          <li>Provide an accurate and efficient method of tracking attendance of individuals.</li>
          <li>Eliminate the need for manual attendance tracking methods, such as sign-in sheets or time cards.</li>
          <li>Reduce the risk of attendance fraud or errors, such as buddy punching or mistaken identity.</li>
          <li>Provide real-time attendance data and analytics to management and HR, enabling them to make informed decisions and improve workforce productivity.</li>
        </ul>
        <hr />
        {/* <h3>Our Location</h3>
        <p>We are located in the heart of Lalitpur. Our address is:</p>
        <p>Pulchowk Campus, Lalitpur Nepal</p>
        <hr /> */}
        <h3>Project Members</h3>
        <ul className="list-unstyled">
          <li>Amrit Poudel - Project Manager</li>
          <li>Bidhan Ghimire - Backend Developer</li>
          <li>Rajesh Khanal - UI/UX Developer</li>
        </ul>
          </div>
      
    </div>
  </div>
</div>


  )
}

export default Aboutus