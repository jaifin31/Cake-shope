// Footer.js
import React from 'react';
import './Footer.css';
import ImageCarousel from './ImageCarousel';

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop:'50px'}}>
      {/* Your other footer content */}
      <ImageCarousel /> {/* Add the ImageCarousel here */}
      <p>&copy; 2023 The Cake Gallery</p>
    </footer>
  );
};

export default Footer;
