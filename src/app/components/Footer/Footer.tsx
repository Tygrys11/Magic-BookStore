import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import styles from '../../styles/footer.module.css';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
        <div className="footer-col">
            <h4>Please Contact Us</h4>
            <ul>
              <li>
                <div className="telNumber">+48 000 000 000</div>
              </li>
              <li>
                bookstore@magicalBooks.pl
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shopping</h4>
            <ul>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 hover:bg-blue-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 hover:bg-blue-400"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 hover:bg-pink-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-800 hover:bg-blue-700"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
        </div>
        <br />
        <hr />
        <div className="copyright">Copyright © 2025 MagicBookStore</div>
      </div>
    </footer>
  );
}

export default Footer;
