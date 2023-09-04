import React,{Fragment} from "react";
import Menu from "./Menu";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import MapboxMap from "./MapboxMap";
import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom'



function Home(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
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
      } else {
        console.error('Error saving form data');
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };


    return(
        <Fragment>
           
  <div className="hero_area">
   
   <Menu></Menu>
   
   <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="img-box">
                  <img src="assets/images/slider-img.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    
                    
                    <h1>
                    Unlock Your Business's Full Potential with DigIndia
                    </h1>
                    <p>
                    Our team of digital marketing experts is dedicated to taking your online presence to new heights. With data-driven strategies and creative solutions, we'll help you reach and engage your target audience effectively. Don't miss the opportunity to transform your brand's digital landscape. Contact us today and let's write your success story together.


                    </p>
                    <div className="btn-box">
                    <Link className="btn btn-dark" to="/contact"> speak with us</Link>
                       
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
         
        </div>

    
      
      </div>
    </section>
    
    
    {/* end slider section */}
  </div>
  {/* service section */}
  <section className="service_section layout_padding">
  <div className="container">
      <div className="heading_container">
        <h2>Our Services</h2>
        <p>
        We specialize in delivering results-driven digital marketing services that drive traffic, leads, and conversions. Partner with us to leverage the power of digital to achieve your business goals.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/s1.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>Link Building</h5>
              <p> Elevate your website's authority with our Link Building services. We secure high-quality backlinks that enhance search rankings, driving organic traffic to your site and many more.</p>
              <a href="https://en.wikipedia.org/wiki/Link_building">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/s2.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>On page SEO</h5>
              <p>Improve your online presence with On-Page SEO. Our experts optimize content, meta tags, and site structure to boost search engine visibility, ensuring your brand shines online.</p>
              <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/s3.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>Online Marketing</h5>
              <p>Harness the full potential of your brand with our Online Marketing services. We craft tailored strategies encompassing SEO, SEM, social media, and more, delivering impressive online results.</p>
              <a href="https://en.wikipedia.org/wiki/Digital_marketing">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/s4.png" alt="" />
            </div>
            <div className="detail-box">
              <h5>Email Marketing</h5>
              <p>Drive engagement and conversions through Email Marketing. Our services include list management, captivating campaigns, and detailed performance analysis and many more.</p>
              <a href="https://en.wikipedia.org/wiki/Email_marketing">
                <span>Read More</span>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </section>
  
  {/* end service section */}

  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>About Us</h2>
            </div>
            <p>
            Welcome to our digital marketing hub, where we're passionate about helping businesses thrive in the digital age. Founded by a team of dedicated professionals, we bring together expertise in various facets of online marketing.

At our core, we're driven by a commitment to innovation and results. With years of experience in SEO, content marketing, social media management, and more, we've honed our skills to meet the unique needs of our clients.
            </p>
            <Link className="nav-link" to="/about">Read more</Link>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="img-box">
            <img src="assets/images/about-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* case section */}
  <section className="case_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>Our Case Studies</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/case-1.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h5>E-commerce SEO Overhaul</h5>
              <p>
              Client: Fashion Haven
Industry: Fashion Retail
Challenge: Fashion Haven needed to revamp their online presence and boost e-commerce sales.
Solution: We conducted a comprehensive SEO audit and revamped the website's structure and content. We also implemented schema markup to improve search engine visibility.
Results: Fashion Haven's organic search traffic increased by 200%, leading to a 35% growth in online sales. They now rank in the top three positions for several high-value keywords.
              </p>
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box">
            <div className="img-box">
              <img src="assets/images/case-2.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h5>Social Media Expansion</h5>
              <p>
              Client: HealthyLife Supplements
Industry: Health and Wellness
Challenge: HealthyLife Supplements wanted to expand their reach on social media and engage with a health-conscious audience.
Solution: We developed a social media strategy that included daily posts, interactive polls, and influencer collaborations. We also ran targeted Facebook and Instagram ad campaigns.
Results: HealthyLife Supplements' social media following grew by 75%, and their engagement rate doubled. 
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end case section */}
  {/* client section */}
  <section className="client_section ">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Testimonial</h2>
      </div>
    </div>
    <section>
      <Carousel id="customCarousel2">
        <Carousel.Item>
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>John Doe </h5>
                        <h6>CEO, ABC Company</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                    “Working with DigIndia has been a game-changer for our business. Their digital marketing expertise brought a significant boost in traffic and conversions. We're truly grateful for their dedication and outstanding results.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/client4.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>David Johnson</h5>
                        <h6>E-commerce Manager, LMN Inc</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                    “We've seen a remarkable improvement in our online presence since partnering with DigIndia. Their professionalism and attention to detail have made them a valuable asset to our marketing efforts.”


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="assets/images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>Jane Smith</h5>
                        <h6>Marketing Director, XYZ Corp</h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                    “DigIndia's team is incredibly knowledgeable and responsive. They tailored a digital strategy to fit our unique needs, and the results have been outstanding. I highly recommend their services.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </section>
    <ol className="carousel-indicators">
        <li
          data-target="#customCarousel2"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#customCarousel2" data-slide-to={1} />
        <li data-target="#customCarousel2" data-slide-to={2} />
      </ol>
  </section>
  {/* end client section */}
  {/* contact section */}
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
          type="text"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
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
  <script src="js/jquery-3.4.1.min.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous">
  </script>
  
  <script src="assets/js/bootstrap.js"></script>
  <script src="assets/js/custom.js"></script>
  
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0LXxH84TBLLEz6Aanz1TogXqtQN2nDlE"></script>
  

 </Fragment>
    )
    }

export default Home