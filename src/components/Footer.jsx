import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <a href="#apparel">WOMEN'S APPAREL</a>
          <a href="#apparel">ACCESSORIES</a>
          <a href="#apparel">SHOES</a>
        </div>
        
        <div className="footer-col">
          <a href="#apparel">MEN'S APPAREL</a>
          <a href="#apparel">ACCESSORIES</a>
          <a href="#apparel">SHOES</a>
        </div>
        
        <div className="footer-col footer-center-logo">
          <h2 className="logo small">LUCKY U STRIKES</h2>
          <div className="skull-icon">
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 21c-2 0-3-2-3-4s1-3 1-3l-2-1c-1-1-1-3 1-5 1-1 3-2 5-2s4 1 5 2c2 2 2 4 1 5l-2 1c0 0 1 1 1 3s-1 4-3 4"></path>
              <path d="M7 8c-2 0-4-1-4-3 0-2 2-3 4-3"></path>
              <path d="M17 8c2 0 4-1 4-3 0-2-2-3-4-3"></path>
              <path d="M12 14v4"></path>
            </svg>
          </div>
        </div>
        
        <div className="footer-col">
          <a href="#shop">SHOP</a>
          <a href="#roping">ROPING</a>
          <a href="#ranching">RANCHING</a>
          <a href="#shop">EVERY DAY</a>
        </div>
        
        <div className="footer-col">
          <a href="#support">SUPPORT</a>
          <a href="#returns">RETURNS</a>
          <a href="#privacy">PRIVACY</a>
          <a href="#contact">REACH OUT</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LUCKY U STRIKES. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
