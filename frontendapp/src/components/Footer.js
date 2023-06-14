import React from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(faFacebookF, faTwitter, faInstagram);


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/listings">Listings</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-media">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
<a href="#"><FontAwesomeIcon icon={faInstagram} /></a>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Room Rental App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
