import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  // Import banners
  const desktopBanner = require('../../assets/section-banner-1.png');
  const mobileBanner = require('../../assets/banner-mobile.png');

  return (
    <section className="banner">
      <Link to="/listing">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopBanner} />
          <img src={mobileBanner} alt="Promotional Banner" />
        </picture>
      </Link>
    </section>
  );
};

export default Banner; 