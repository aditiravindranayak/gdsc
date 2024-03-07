import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div>
 <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
  <footer>
    <div className="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="https://developer.android.com/">Chrome</a></li>
        <li><a href="https://cloud.google.com/">Cloud</a></li>
        <li><a href="https://www.tensorflow.org/">TensorFlow</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
      <li><Link to="/about">About</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/core">Core</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Join Us</h4>
      <ul>
        <li><a href="#">Workshops</a></li>
        <li><a href="#">Seminars</a></li>
        <li><a href="#">Hackathons</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>follow us</h4>
      <div className="links">
        <a href="https://www.linkedin.com/company/gdsc-sit-pune/mycompany/"><i className="fab fa-linkedin-in" /></a>
        <a href="https://www.sitpune.edu.in/student-club"><i className="fas fa-users" /></a>
        <a href="https://gdsc.community.dev/symbiosis-institute-of-technology-pune/"><i className="fas fa-globe" /></a>
        <a href="https://www.instagram.com/gdsc_sit/"><i className="fab fa-instagram" /></a>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Footer;