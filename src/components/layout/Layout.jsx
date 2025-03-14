import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-grid-pattern flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent pointer-events-none" />
      <Navbar />
      <main className="pt-20 px-4 md:px-8 flex-grow">
        <div className="max-w-7xl mx-auto glass-container animate-fadeIn">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 