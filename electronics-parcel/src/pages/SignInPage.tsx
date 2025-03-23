import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt with:', { email, password });
    // In a real app, you would handle authentication here
  };

  return (
    <Layout>
      <div className="section-padding auth-page">
        <div className="container">
          <div className="auth-card">
            <div className="auth-header">
              <img src={require('../assets/signin-logo.svg')} alt="Sign In" />
              <h1>Sign In</h1>
              <p>Sign in to your account to continue</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <div className="text-right mt-1">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Sign In
              </button>
            </form>
            
            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage; 