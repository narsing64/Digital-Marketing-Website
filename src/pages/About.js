import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";
function About(){
    return(
      <div className="sub_page">
        <Fragment>
          <div className="hero_area">
          <Menu></Menu>
          </div>
  
  {/* about section */}
  <section className="about_section layout_padding layout_margin">
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

Our mission is clear: to empower businesses of all sizes to succeed online. We believe in data-driven strategies, creative problem-solving, and putting our clients' needs first. When you partner with us, you're not just a client; you're part of our digital family.

Whether you're seeking better search rankings, social media engagement, or conversion-focused content, we're here to help you achieve your online goals. Let's embark on this digital journey together and create a brighter future for your business.

Thank you for considering us as your digital marketing partner. We're excited to be part of your online success story.





            </p>
            
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
  <Footer></Footer>


        </Fragment>
        </div>
    )
}
export default About