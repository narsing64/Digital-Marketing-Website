import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Menu.css'

function Menu(){
  return (
    <header className="header_section">
    <div className="container-fluid">
      
      <nav className="navbar navbar-expand-lg custom_nav-container ">
      <Link className="nav-link navbar-brand" to="/"><img className='img-box logo'src='assets/images/logo.png'/></Link> 
         
      
      <h1>DigIndia</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="nav-bar-toggler-icon"> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">about</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/services">services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/portfolio">portfolio</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">contact</Link>
            </li>
          </ul>
         
        
        </div>
      </nav>
    </div>
  </header>
  );
}

export default Menu;
