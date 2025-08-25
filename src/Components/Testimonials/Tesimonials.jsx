import React from 'react'
import './Testimonials.css'
import { Star } from 'lucide-react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback.JSX';
const Tesimonials = () => {



const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face",
    content:
      "Working with this agency transformed our online presence. Our Meta ads now generate 4x ROI, and our new Shopify store converts at 8.5%. Absolutely incredible results!",
    rating: 5,
    metrics: "400% ROI increase",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "EcoGoods",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The brand rebranding project exceeded all expectations. Sales increased 250% in just 3 months after launch. Their strategic approach to brand positioning is remarkable.",
    rating: 5,
    metrics: "250% sales growth",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "FashionForward",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Our Shopify redesign was a game-changer. Page load speeds improved by 60%, and conversion rates doubled. The team's attention to detail is unmatched.",
    rating: 5,
    metrics: "100% conversion boost",
  },
];


  return (
   <>


  
    <section  className="testimonials-section" id="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <span>Client Success Stories</span>
          </div>
          <h2 className="section-title">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. See what our clients have to say
            about the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
                <span className="rating-value">{t.rating}.0</span>
              </div>

              <Quote className="quote-icon" />

              <p className="testimonial-content">"{t.content}"</p>

              <div className="author">
                <ImageWithFallback
                  src={t.image}
                  alt={t.name}
                  className="author-img"
                />
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                  <div className="author-company">{t.company}</div>
                </div>
              </div>

              <div className="metrics">
                <div className="metrics-label">Key Result:</div>
                <div className="metrics-value">{t.metrics}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
   {/*       <div className="trust-indicators">
          <div className="indicator">
            <div className="indicator-value">50+</div>
            <div className="indicator-label">Happy Clients</div>
          </div>
          <div className="indicator">
            <div className="indicator-value">4.9/5</div>
            <div className="indicator-label">Average Rating</div>
          </div>
          <div className="indicator">
            <div className="indicator-value">98%</div>
            <div className="indicator-label">Client Retention</div>
          </div>
          <div className="indicator">
            <div className="indicator-value">24/7</div>
            <div className="indicator-label">Support</div>
          </div>
        </div>  */}
      </div>
    </section>
   

   
   </>
    
  )
}

export default Tesimonials
