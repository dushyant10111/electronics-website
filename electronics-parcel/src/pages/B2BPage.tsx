import React from 'react';
import Layout from '../components/layout/Layout';

const B2BPage: React.FC = () => {
  return (
    <Layout>
      <div className="section-padding b2b-page">
        <div className="container">
          <div className="b2b-header text-center">
            <h1>B2B Solutions</h1>
            <p className="lead">Trusted B2B partner for refurbished electronics, serving businesses across India</p>
          </div>
          
          <div className="b2b-services">
            <div className="service-card">
              <div className="service-icon">
                <img src={require('../assets/icon-bulk.png')} alt="Bulk Purchase" />
              </div>
              <div className="service-content">
                <h3>Bulk Purchase</h3>
                <p>Get volume discounts on certified refurbished electronics for your business needs. We offer special pricing for corporate clients and educational institutions.</p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src={require('../assets/icon-distribution.png')} alt="Distribution" />
              </div>
              <div className="service-content">
                <h3>Distribution Services</h3>
                <p>Become a distributor for our wide range of refurbished products. Ideal for retailers and e-commerce businesses looking to expand their product range.</p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <img src={require('../assets/icon-corporate.png')} alt="Corporate Solutions" />
              </div>
              <div className="service-content">
                <h3>Corporate Solutions</h3>
                <p>Custom packages of electronics and appliances for offices, including laptops, smartphones, and other essential tech equipment at affordable prices.</p>
              </div>
            </div>
          </div>
          
          <div className="why-choose-section">
            <h2 className="section-title">Why Choose Us for B2B?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Quality Assurance</h4>
                <p>All products undergo a rigorous 50+ point quality check and are certified for business use</p>
              </div>
              
              <div className="feature-item">
                <h4>Warranty Support</h4>
                <p>Extended warranty options available for bulk purchases with dedicated business support</p>
              </div>
              
              <div className="feature-item">
                <h4>Consistent Supply</h4>
                <p>Reliable inventory management ensuring product availability when you need it</p>
              </div>
              
              <div className="feature-item">
                <h4>Nationwide Delivery</h4>
                <p>Fast shipping across India with tracking and special handling for bulk orders</p>
              </div>
              
              <div className="feature-item">
                <h4>Competitive Pricing</h4>
                <p>Best market rates for refurbished electronics with volume-based discounts</p>
              </div>
              
              <div className="feature-item">
                <h4>Custom Solutions</h4>
                <p>Tailored packages based on your specific business requirements</p>
              </div>
            </div>
          </div>
          
          <div className="client-section">
            <h2 className="section-title">Our B2B Clients</h2>
            <div className="client-logos">
              <div className="client-logo">
                <img src={require('../assets/client-logo-1.png')} alt="Client 1" />
              </div>
              <div className="client-logo">
                <img src={require('../assets/client-logo-2.png')} alt="Client 2" />
              </div>
              <div className="client-logo">
                <img src={require('../assets/client-logo-3.png')} alt="Client 3" />
              </div>
              <div className="client-logo">
                <img src={require('../assets/client-logo-4.png')} alt="Client 4" />
              </div>
            </div>
          </div>
          
          <div className="contact-section">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-intro">Fill out the form below and our B2B team will contact you within 24 hours</p>
            
            <div className="b2b-form-container">
              <form className="b2b-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" placeholder="Your company name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="name">Contact Person</label>
                    <input type="text" id="name" placeholder="Your name" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Business Email</label>
                    <input type="email" id="email" placeholder="Your business email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Your phone number" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="business-type">Business Type</label>
                  <select id="business-type" required>
                    <option value="">Select business type</option>
                    <option value="corporate">Corporate</option>
                    <option value="distributor">Distributor</option>
                    <option value="retailer">Retailer</option>
                    <option value="educational">Educational Institution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Requirements</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your business needs"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default B2BPage; 