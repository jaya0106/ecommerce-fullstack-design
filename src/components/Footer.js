// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Ecommerce
      </div>
    </footer>
  );
}

export default Footer;