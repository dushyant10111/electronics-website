import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Our Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/b2b">B2B</Link></li>
                <li><Link to="/franchise">Franchise</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/shipping">Shipping Policy</Link></li>
                <li><Link to="/returns">Returns & Refunds</Link></li>
                <li><Link to="/warranty">Warranty Policy</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Popular Categories</h3>
              <ul>
                <li><Link to="/listing?category=headphones">Headphones & Earphones</Link></li>
                <li><Link to="/listing?category=smartwatches">Smart Watches</Link></li>
                <li><Link to="/listing?category=speakers">Bluetooth Speakers</Link></li>
                <li><Link to="/listing?category=home-appliances">Home Appliances</Link></li>
                <li><Link to="/listing?category=mobile-accessories">Mobile Accessories</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
              <div className="contact-details">
                <p><strong>Customer Care:</strong> 092122 00000</p>
                <p><strong>Email:</strong> care@rockingdeals.in</p>
                <p><strong>Store Address:</strong> 12, Sec 8, Mathura Road, Faridabad, Haryana - 121006</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rocking Deals. All Rights Reserved.</p>
          <div className="payment-icons">
            <span>We Accept:</span>
            <img src={require('../../assets/payment-methods.png')} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 