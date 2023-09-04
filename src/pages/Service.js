import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Service(){
    return(
      
      <div className="sub_page">
        <Fragment>
          <div className="hero_area ">
           <Menu></Menu>
          </div>
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
  
  <Footer></Footer>


        </Fragment>
        </div>
        
    )
}
export default Service