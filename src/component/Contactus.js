import React, { useEffect } from 'react'

const Contactus = (props) => {

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
      <div className="container">
        <div className="row">
          <div className="col-lg-12 container-fluid">
            <h3 className="my-2"><u>Contact Us</u></h3>
            <p>Feel free to reach out to us for any inquiries. We'd love to hear from you!</p>
            <h3 className="my-2"><u>Visit Us</u></h3>
            <p>IOE Pulchowk Campus, Pulchowk, Lalitpur, Nepal</p>
            <h3 className="my-2"><u>Reach Us Through</u></h3>
            <ul className=" list-inline ">
              <div className="list-inline-item   mx-2">
                <a href="https://www.facebook.com/raazkhnl" className="social-icon mx-3" rel="noreferrer" target="_blank"><i className="fas fa-globe" /></a>
              </div>
              <li className="list-inline-item mx-2">
                <a href="mailto:raazkhnl@gmail.com" className="social-icon mx-3" rel="noreferrer" target="_blank"><i className="fa fa-at" /></a>
              </li>
                            <li className="list-inline-item mx-2">
              <a href="tel:+9779863244500" className="social-icon mx-3"  rel="noreferrer" target="_blank"><i className="fa fa-phone" /></a>
              </li>
              
            </ul>
            <h3><u>Query At</u></h3>
            <p>info@pcampus.edu.np
</p>
          </div>
        </div>
      </div>


      <div className="row  mt-4">
        <div className="container col-lg-5 p-3">
          <h3>Find Us on the Map</h3>
          <div className="embed-responsive">
            <iframe width="450" title='Location'
              height="250" className=" map-frame embed-responsive-item border rounded" style={{ border: "10px", borderColor: "#992d99" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1715878630657!2d85.313988688855!3d27.681091099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbf6b89eb7%3A0x951b3c8ac733e3ec!2z4KSH4KSo4KWN4KSc4KS_4KSo4KS_4KSv4KSw4KS_4KSZIOCkheCkp-CljeCkr-Ckr-CkqCDgpLjgpILgpLjgpY3gpKXgpL7gpKgsIOCkquClgeCksuCljeCkmuCli-CklSDgpJXgpY3gpK_gpL7gpK7gpY3gpKrgpLg!5e0!3m2!1sne!2snp!4v1702622710072!5m2!1sne!2snp"  allowFullScreen />
          </div>
        </div>




        <div className="container col-lg-5 map-frame rounded p-3 mb-2" style={{ backgroundColor:'#63c5da'}}>
          <div className="text-center">
            Contact Us
            <hr />
          </div>
          <form action='https://formspree.io/f/xrgvvqne' method='POST'>

            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group mt-3">
              <textarea name='message' className="form-control" rows={5} placeholder="Message" defaultValue={""} />
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/" />

            <button type="submit" className="btn btn-light bg-light mt-2" >Send Message</button>
          </form>
        </div>
      </div>
    </div>






  )
}

export default Contactus