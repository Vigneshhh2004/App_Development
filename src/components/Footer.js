import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-about">
                    <h2>Hall Booking System</h2>
                    <p>Your go-to platform for finding and booking event spaces.</p>
                </div>
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/" aria-label="Go to home page">Home</a></li>
                        <li><a href="/about" aria-label="Go to about page">About</a></li>
                        <li><a href="/contact" aria-label="Go to contact page">Contact</a></li>
                        <li><a href="/login" aria-label="Go to login page">Login</a></li>
                        <li><a href="/register" aria-label="Go to register page">Register</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@hallbookingsystem.com">info@hallbookingsystem.com</a></p>
                    <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
                </div>
                <div className="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <ul className="social-media">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Hall Booking System. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
