import React from 'react';
import Layout from '../components/layout/Layout';

const FranchisePage: React.FC = () => {
  return (
    <Layout>
      <div className="section-padding franchise-page">
        <div className="container">
          <div className="franchise-header text-center">
            <h1>Franchise Opportunities</h1>
            <p className="lead">Join the Rocking Deals family and be part of India's fastest growing refurbished electronics brand</p>
          </div>
          
          <div className="benefits-section">
            <h2 className="section-title">Why Choose a Rocking Deals Franchise?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src={require('../assets/icon-investment.png')} alt="Low Investment" />
                </div>
                <h3>Low Investment</h3>
                <p>Start your business with minimal capital requirement and quick ROI</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src={require('../assets/icon-support.png')} alt="Full Support" />
                </div>
                <h3>Complete Support</h3>
                <p>Get comprehensive training, marketing, and operational support</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src={require('../assets/icon-products.png')} alt="Wide Range" />
                </div>
                <h3>Wide Product Range</h3>
                <p>Access to a diverse catalog of certified refurbished electronics</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src={require('../assets/icon-brand.png')} alt="Established Brand" />
                </div>
                <h3>Established Brand</h3>
                <p>Leverage our trusted brand name and customer loyalty</p>
              </div>
            </div>
          </div>
          
          <div className="franchise-models">
            <h2 className="section-title">Franchise Models</h2>
            <div className="models-grid">
              <div className="model-card">
                <h3>Retail Store</h3>
                <ul>
                  <li>Area requirement: 500-800 sq. ft.</li>
                  <li>Investment: ₹15-25 lakhs</li>
                  <li>ROI period: 12-18 months</li>
                </ul>
              </div>
              
              <div className="model-card">
                <h3>Express Store</h3>
                <ul>
                  <li>Area requirement: 250-400 sq. ft.</li>
                  <li>Investment: ₹8-12 lakhs</li>
                  <li>ROI period: 10-15 months</li>
                </ul>
              </div>
              
              <div className="model-card">
                <h3>Shop-in-Shop</h3>
                <ul>
                  <li>Area requirement: 100-200 sq. ft.</li>
                  <li>Investment: ₹5-8 lakhs</li>
                  <li>ROI period: 8-12 months</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="enquiry-form-section">
            <h2 className="section-title">Interested in a Franchise?</h2>
            <div className="franchise-form-container">
              <form className="franchise-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Your city" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="investment">Available Investment</label>
                  <select id="investment" required>
                    <option value="">Select investment range</option>
                    <option value="5-10">₹5-10 lakhs</option>
                    <option value="10-15">₹10-15 lakhs</option>
                    <option value="15-25">₹15-25 lakhs</option>
                    <option value="25+">More than ₹25 lakhs</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your interest in our franchise"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FranchisePage; 