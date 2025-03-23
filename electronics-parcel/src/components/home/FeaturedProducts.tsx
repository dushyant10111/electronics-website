import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: require('../../assets/product-1.png'),
      title: 'Boat Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime',
      price: 1099,
      originalPrice: 2999,
      discount: 63
    },
    {
      id: 2,
      image: require('../../assets/product-2.png'),
      title: 'JBL Tune 510BT, On Ear Wireless Headphones with Mic',
      price: 2999,
      originalPrice: 4999,
      discount: 40
    },
    {
      id: 3,
      image: require('../../assets/product-3.png'),
      title: 'Hammer Pulse 3.0 Bluetooth Calling Smart Watch',
      price: 1499,
      originalPrice: 6999,
      discount: 79
    },
    {
      id: 4,
      image: require('../../assets/product-4.png'),
      title: 'Noise ColorFit Pulse Grand Smart Watch with 1.69" HD Display',
      price: 1599,
      originalPrice: 3999,
      discount: 60
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading">
          <h2>
            Featured <span>Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default FeaturedProducts; 