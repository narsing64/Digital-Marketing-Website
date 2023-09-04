import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import MapboxMap from "./MapboxMap";

function Contact(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data saved successfully');
        navigate('/success')
      } 
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return(
      <div className="sub_page">
        <Fragment>
          <div className="hero_area">
         <Menu></Menu>
         </div>
         
  <section className="contact_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 col-lg-4 offset-md-1">
          <div className="form_container">
            <div className="heading_container">
              <h2>Request A Call back</h2>
            </div>
            <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      
          type="text"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button type="submit">SEND</button>
      </div>
    </form>
          </div>
        </div>
        <div className="col-md-6 col-lg-7 px-0">
          <div className="map_container">
            <div className="map">
              <div id="googleMap" />
              <MapboxMap></MapboxMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contact section */}
  
  <Footer></Footer>
  {/* jQery */}
  {/* popper js */}
  {/* bootstrap js */}
  {/* Google Map */}
  
  {/* End Google Map */}


        </Fragment>
        </div>
    )
}
export default Contact