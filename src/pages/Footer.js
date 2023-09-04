
import React,{Fragment} from "react";
import { Link } from "react-router-dom";

function Footer(){
  function subscrice(){
    alert("successfully subscribed")
  }
    return(
<Fragment>
<div className="footer_container">
    {/* info section */}
    <section className="info_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 ">
            <div className="info_detail">
              <h4>DigIndia</h4>
              <p>
              Explore the possibilities with us. Discover our innovative solutions for your digital journey. Your success, our priority.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">about</Link>
              <Link className="nav-link" to="/services">service</Link>
              <Link className="nav-link" to="/contact">contact</Link>
              <Link className="nav-link" to="/portfolio">portfolio</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <h4>Subscribe</h4>
            <form action="#">
              <input type="text" placeholder="Enter email" />
              <button type="submit" onClick={subscrice}>Subscribe</button>
            </form>
          </div>
          <div className="col-md-6 col-lg-3 mb-0 ml-auto">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Location</span>
                </a>
                <a href="">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call +91 7780251373</span>
                </a>
                <a href="">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>narsingmadaka7@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="info_social">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end info section */}
    {/* footer section */}
    <footer className="footer_section">
      <div className="container">
        <p>
          © <span id="displayYear" /> All Rights Reserved By Narsing
          
        </p>
      </div>
    </footer>
    </div>
</Fragment>
    )
}

export default Footer