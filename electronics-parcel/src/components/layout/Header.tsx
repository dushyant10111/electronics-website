import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiMapPin } from 'react-icons/fi';

// Placeholder for the logo image
const logoSrc = require('../../assets/logo.svg');

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdowns, setCategoryDropdowns] = useState<Record<string, boolean>>({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCategoryDropdown = (category: string) => {
    setCategoryDropdowns({
      ...categoryDropdowns,
      [category]: !categoryDropdowns[category]
    });
  };

  const categories = [
    { id: 'hot-deals', name: 'HOT DEALS', subcategories: ['Bluetooth', 'Soundbar', 'Wired headphone'] },
    { id: 'home-appliances', name: 'HOME APPLIANCES', subcategories: ['Refrigerators', 'Washing Machines', 'Air Conditioners'] },
    { id: 'mobile-accessories', name: 'MOBILE ACCESSORIES', subcategories: ['Cases', 'Screen Protectors', 'Chargers'] },
    { id: 'speakers', name: 'SPEAKERS', subcategories: ['Bluetooth Speakers', 'Soundbars', 'Home Theatre'] },
    { id: 'computer-accessories', name: 'COMPUTER ACCESSORIES', subcategories: ['Keyboards', 'Mouse', 'Monitors'] },
    { id: 'health-fitness', name: 'HEALTH AND FITNESS', subcategories: ['Fitness Bands', 'Smartwatches', 'Exercise Equipment'] }
  ];

  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <p>Please Call us- 092122 00000 | 9811003237 if you want to buy something! 100% original products guaranteed!!</p>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src={logoSrc} alt="Rocking Deals Logo" />
            </Link>

            <div className="search-box">
              <FiSearch />
              <input type="text" placeholder="Search product..." />
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            <div className="right-nav">
              <div className="location">
                <FiMapPin />
                <span>Store Location - Faridabad</span>
              </div>
              <Link to="/b2b">B2B</Link>
              <Link to="/franchise">Franchise</Link>
              <div className="auth-links">
                <Link to="/signin">Sign in</Link>
                <span>|</span>
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`categories-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <ul className="categories-list">
            {categories.map((category) => (
              <li key={category.id} className="category-item">
                <span 
                  onClick={() => toggleCategoryDropdown(category.id)}
                >
                  {category.name}
                </span>
                <div className={`dropdown ${categoryDropdowns[category.id] ? 'mobile-visible' : ''}`}>
                  {category.subcategories.map((subcategory, index) => (
                    <Link key={index} to={`/listing?category=${category.id}&subcategory=${subcategory}`}>
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header; 