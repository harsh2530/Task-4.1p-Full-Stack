import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Top section with 3 columns */}
      <div className="footer-top">
        <div className="footer-column">
          <h2>Explore</h2>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div className="footer-column">
          <h2>Support</h2>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-column social-column">
          <h2>Stay connected</h2>
          <div className="social-icons">
            <img src={require('./image/1.jpg')} alt="facebook" />
            <img src={require('./image/2.jpg')} alt="twitter" />
            <img src={require('./image/3.jpg')} alt="instagram" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <h2>DEV@Deakin 2022</h2>
        <div className="footer-links">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;