import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  



  const services = [
    {name: "Meta Ads", path: "/services/meta-ads" },
    { name: "Brand Strategy", path: "/services/brand-strategy" },
    { name: "Shopify Store Creation & Rebranding", path: "/services/shopify-store" },
    { name: "SEO Optimization", path: "/services/seo" },
    { name: "Social Media Marketing", path: "/services/smm" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    
  ];



  const [emails  , setEmail] = useState({email : ""});

  const handleInputChange = (e) => {
    setEmail({...emails , [e.target.name]: e.target.value});
 
  };



  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      await addDoc(collection(db, "newsletter_subscriptions"), {    
        ...email,
        createdAt: Timestamp.now(),
      });
      
    } catch (error) {
      console.error("Error submitting form: ", error);      
      alert("Error submitting the form, please try again later");
    }
  }



  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Newsletter Section */}
          <div className="footer-newsletter">
             <h3>Join Our Newsletter</h3>
            <p>Subscribe to our newsletter for the latest insights</p>
            <form    onSubmit={handleSubmit} className="newsletter-form">
              <input onChange={handleInputChange} value={emails.email} type="email" placeholder="Your email address" required />
              <button className="subscribe-btn" type="submit">
               Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li className='footer-links'      key={index}>
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {companyLinks.map((link, index) => (
                  <li className='footer-links'   key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="contact-info">
                <li >
                  <Mail size={16} className="icon" />
                  <span>infoscalix.co</span>
                </li>
                <li >
                  <Phone size={16} className="icon" />
                  <span>+92 330 4393 035</span>
                </li>
                <li  >
                  <MapPin size={16} className="icon" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="brand-info">
            <Link to="/" className="footer-logo">Scalix</Link>
            <p>Driving digital transformation since 2020</p>
          </div>

          <div className="footer-legal">
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>

            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookies</Link>
            </div>

            <p className="copyright">© {currentYear} Scalix. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;