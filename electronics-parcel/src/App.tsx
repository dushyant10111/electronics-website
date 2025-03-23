import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ListingPage from './pages/ListingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import B2BPage from './pages/B2BPage';
import FranchisePage from './pages/FranchisePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/category/:id" element={<ListingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/b2b" element={<B2BPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
    </Routes>
  );
};

export default App; 