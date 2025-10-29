// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simular login exitoso (sin validación real)
    localStorage.setItem('authToken', 'fake-token-123');
    
    // Disparar evento para que Navbar y Footer actualicen
    window.dispatchEvent(new Event('storage'));
    
    // Redirigir al dashboard
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen flex items-center justify-center bg-nyanza">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-playfair text-stone-900 mb-6 text-center">
            Log In
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-stone-900 font-poppins mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-persianblue"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-stone-900 font-poppins mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-persianblue"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-persianblue text-white py-3 rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-stone-600 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-persianblue hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;