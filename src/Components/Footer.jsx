// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide the best products and services to meet our customers' needs.</p>
          </div>
          
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p><i className="fas fa-envelope mr-2"></i> email@example.com</p>
            <p><i className="fas fa-phone mr-2"></i> +1 234 567 890</p>
            <p><i className="fas fa-map-marker-alt mr-2"></i> 1234 Street, City, Country</p>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary mt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
