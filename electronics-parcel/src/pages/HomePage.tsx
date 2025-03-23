import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Certified Refurbished Electronics</h1>
            <p>Premium quality at affordable prices with warranty</p>
            <Link to="/listing" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
      
      <div className="featured-categories section-padding">
        <div className="container">
          <h2 className="section-title">Featured Categories</h2>
          <div className="category-grid">
            <Link to="/listing?category=headphones" className="category-card">
              <div className="category-image">
                <img src={require('../assets/category-headphones.png')} alt="Headphones" />
              </div>
              <h3>Headphones & Earphones</h3>
            </Link>
            
            <Link to="/listing?category=smartwatches" className="category-card">
              <div className="category-image">
                <img src={require('../assets/category-smartwatches.png')} alt="Smart Watches" />
              </div>
              <h3>Smart Watches</h3>
            </Link>
            
            <Link to="/listing?category=speakers" className="category-card">
              <div className="category-image">
                <img src={require('../assets/category-speakers.png')} alt="Speakers" />
              </div>
              <h3>Bluetooth Speakers</h3>
            </Link>
            
            <Link to="/listing?category=mobile-accessories" className="category-card">
              <div className="category-image">
                <img src={require('../assets/category-mobile.png')} alt="Mobile Accessories" />
              </div>
              <h3>Mobile Accessories</h3>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="promo-banner section-padding">
        <div className="container">
          <div className="banner-content">
            <h2>Summer Sale</h2>
            <p>Up to 70% off on selected items</p>
            <Link to="/listing?category=hot-deals" className="btn btn-secondary">View Deals</Link>
          </div>
        </div>
      </div>
      
      <div className="featured-products section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <Link to="/listing" className="view-all">View All</Link>
          </div>
          
          <div className="products-grid">
            {/* Product cards will go here */}
          </div>
        </div>
      </div>
      
      <div className="why-choose-us section-padding">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={require('../assets/icon-quality.png')} alt="Quality" />
              </div>
              <h3>Certified Quality</h3>
              <p>All products undergo 50+ quality checks</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img src={require('../assets/icon-warranty.png')} alt="Warranty" />
              </div>
              <h3>Warranty</h3>
              <p>Up to 12 months warranty on all products</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img src={require('../assets/icon-delivery.png')} alt="Delivery" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Free shipping on orders above ₹500</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <img src={require('../assets/icon-support.png')} alt="Support" />
              </div>
              <h3>24/7 Support</h3>
              <p>Dedicated customer support</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 