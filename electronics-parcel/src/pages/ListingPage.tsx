import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
// import '../';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
}

const ListingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [sortBy, setSortBy] = useState<string>('popular');
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || id || '';
  const subcategory = queryParams.get('subcategory') || '';
  
  // Mock products data
  const products: Product[] = [
    {
      id: 1,
      image: require('../assets/product-1.png'),
      title: 'Boat Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime',
      price: 1099,
      originalPrice: 2999,
      discount: 63
    },
    {
      id: 2,
      image: require('../assets/product-2.png'),
      title: 'JBL Tune 510BT, On Ear Wireless Headphones with Mic',
      price: 2999,
      originalPrice: 4999,
      discount: 40
    },
    {
      id: 3,
      image: require('../assets/product-3.png'),
      title: 'Hammer Pulse 3.0 Bluetooth Calling Smart Watch',
      price: 1499,
      originalPrice: 6999,
      discount: 79
    },
    {
      id: 4,
      image: require('../assets/product-4.png'),
      title: 'Noise ColorFit Pulse Grand Smart Watch with 1.69" HD Display',
      price: 1599,
      originalPrice: 3999,
      discount: 60
    },
    {
      id: 5,
      image: require('../assets/product-5.png'),
      title: 'boAt Stone 350 Portable Bluetooth Speaker with 10W RMS Signature Sound',
      price: 1499,
      originalPrice: 3490,
      discount: 57
    },
    {
      id: 6,
      image: require('../assets/product-6.png'),
      title: 'Sony WH-CH510 Wireless On-Ear Headphones with Mic',
      price: 2490,
      originalPrice: 4990,
      discount: 50
    }
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  
  // Get category title for display
  const getCategoryTitle = () => {
    const categoryMap: Record<string, string> = {
      'headphones': 'Headphones & Earphones',
      'smartwatches': 'Smart Watches',
      'speakers': 'Bluetooth Speakers',
      'home-appliances': 'Home Appliances',
      'mobile-accessories': 'Mobile Accessories',
      'computer-accessories': 'Computer & Accessories',
      'hot-deals': 'Hot Deals'
    };
    
    return categoryMap[category] || 'All Products';
  };

  return (
    <Layout>
      <div className="section-padding listing-page">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="filters-sidebar">
                <h2>Filters</h2>
                
                <div className="filter-section">
                  <h3>Price Range</h3>
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> Under ₹1,000
                    </label>
                    <label>
                      <input type="checkbox" /> ₹1,000 - ₹5,000
                    </label>
                    <label>
                      <input type="checkbox" /> ₹5,000 - ₹10,000
                    </label>
                    <label>
                      <input type="checkbox" /> ₹10,000+
                    </label>
                  </div>
                </div>
                
                <div className="filter-section">
                  <h3>Discount</h3>
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> 50% or more
                    </label>
                    <label>
                      <input type="checkbox" /> 40% or more
                    </label>
                    <label>
                      <input type="checkbox" /> 30% or more
                    </label>
                    <label>
                      <input type="checkbox" /> 20% or more
                    </label>
                  </div>
                </div>
                
                <div className="filter-section">
                  <h3>Brand</h3>
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> Boat
                    </label>
                    <label>
                      <input type="checkbox" /> JBL
                    </label>
                    <label>
                      <input type="checkbox" /> Sony
                    </label>
                    <label>
                      <input type="checkbox" /> Noise
                    </label>
                    <label>
                      <input type="checkbox" /> Samsung
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Listing */}
            <div className="w-full md:w-3/4">
              <div className="listing-header">
                <h1>{getCategoryTitle()}</h1>
                <div className="sorting">
                  <label>
                    Sort by:
                    <select value={sortBy} onChange={handleSortChange}>
                      <option value="popular">Popularity</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="discount">Discount</option>
                    </select>
                  </label>
                </div>
              </div>
              
              <div className="products-grid">
                {products.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      <div className="discount-badge">{product.discount}% OFF</div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-title">{product.title}</h3>
                      <div className="price-info">
                        <span className="current-price">₹{product.price}</span>
                        <span className="original-price">₹{product.originalPrice}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage; 