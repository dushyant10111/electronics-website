import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface ProductData {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock product data - in a real app this would come from an API
  const product: ProductData = {
    id: id || '1',
    image: require('../assets/product-1.png'),
    title: 'Boat Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime',
    price: 1099,
    originalPrice: 2999,
    discount: 63,
    description: 'The Boat Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds offer an immersive audio experience with deep bass. With 42 hours of total playtime, you can enjoy your favorite music all day long. The earbuds feature IPX4 water resistance, making them perfect for workouts and outdoor activities.'
  };

  return (
    <Layout>
      <div className="section-padding product-detail">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="product-gallery">
              <img src={product.image} alt={product.title} />
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1>{product.title}</h1>
              
              <div className="price-box">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount-badge">{product.discount}% OFF</span>
              </div>
              
              <div className="description">
                <p>{product.description}</p>
              </div>
              
              <div className="action-buttons">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-secondary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage; 