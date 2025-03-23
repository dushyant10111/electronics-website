import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  image: string;
  title: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 'headphones',
      image: require('../../assets/category-1.png'),
      title: 'Headphones'
    },
    {
      id: 'smartwatches',
      image: require('../../assets/category-2.png'),
      title: 'Smart Watches'
    },
    {
      id: 'speakers',
      image: require('../../assets/category-3.png'),
      title: 'Bluetooth Speakers'
    },
    {
      id: 'home-appliances',
      image: require('../../assets/category-4.png'),
      title: 'Home Appliances'
    },
    {
      id: 'mobile-accessories',
      image: require('../../assets/top-category-5.png'),
      title: 'Mobile Accessories'
    },
    {
      id: 'computer-accessories',
      image: require('../../assets/top-category-6.png'),
      title: 'Computer & Accessories'
    }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container">
        <div className="section-heading">
          <h2>
            Top <span>Categories</span>
          </h2>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="category-title">
                <h3>{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 