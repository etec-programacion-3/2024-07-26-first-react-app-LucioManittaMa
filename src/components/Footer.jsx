import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-row">
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our products</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Follow order</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Our brands</h4>
          <ul>
            <li><a href="https://nike.com/" target="_blank" rel="noopener noreferrer">Nike</a></li>
            <li><a href="https://adidas.com/" target="_blank" rel="noopener noreferrer">Adidas</a></li>
            <li><a href="https://vans.com/" target="_blank" rel="noopener noreferrer">Vans</a></li>
            <li><a href="https://puma.com" target="_blank" rel="noopener noreferrer">Puma</a></li>
            <li><a href="https://dcshoes.com" target="_blank" rel="noopener noreferrer">DC</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Follow us</h4>
          <div className="social-link">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
