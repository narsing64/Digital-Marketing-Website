import React,{Fragment} from "react";
import Menu from "./Menu";
import Footer from "./Footer";



function Portfolio(){
    const projects = [
        {
          id: 1,
          title: 'Social Media Campaign',
          description: 'A successful social media campaign that increased engagement and brand awareness for a client in the fashion industry. We implemented a content strategy, created eye-catching visuals, and monitored performance metrics to achieve outstanding results.',
          imageUrl: 'assets/images/images1.avif',
        },
        {
          id: 2,
          title: 'Search engine  Optimization',
          description: "Our team worked on optimizing a client's website for search engines, resulting in a significant increase in organic traffic and higher search engine rankings. We implemented on-page SEO, performed keyword research, and improved site structure.",
          imageUrl: 'assets/images/images2.avif',
        },
        {
          id: 3,
          title: ' Email Marketing Campaign',
          description: 'An email marketing campaign that boosted sales for an e-commerce client. We designed compelling email templates, segmented the audience, and implemented personalized recommendations, resulting in a substantial increase in revenue.',
          imageUrl: 'assets/images/images3.webp',
        },
        {
            id: 4,
            title: 'Content Marketing Strategy',
            description: "Developed a content marketing strategy for a startup, including blog posts, infographics, and videos. The strategy helped establish thought leadership in the industry and increased website traffic, ultimately leading to more conversions.",
            imageUrl: 'assets/images/images4.webp',
          },
          {
            id: 5,
            title: ' Online Reputation Management',
            description: " Managed online reputation for a client facing negative reviews and comments. Our team implemented a reputation repair strategy, encouraging positive reviews and addressing concerns, which restored the brand's image.",
            imageUrl: 'assets/images/images5.webp',
          },
          {
            id: 6,
            title: '  Local SEO for Small Business',
            description: "Improved local search visibility for a small business through local SEO tactics. We optimized Google My Business profiles, managed online reviews, and implemented local link-building strategies, resulting in higher foot traffic and phone inquiries.",
            imageUrl: 'assets/images/images6.webp',
          },
      ];
    
      
    
    return(
      
      <div className="sub_page">
        <Fragment>
          <div className="hero_area ">
           <Menu></Menu>
          </div>
   <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container">
      <div className="portfolio">
          <div className="container">
            <h2>Our Portfolio</h2>
            <br/>
            <br/>
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <div className="project-card">
                    <img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-image"
                    />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
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
export default Portfolio