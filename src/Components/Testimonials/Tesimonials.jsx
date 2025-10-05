import React, { useRef, useEffect } from "react";
import "./Testimonials.css";
import { Star } from "lucide-react";
import { Quote } from "lucide-react";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback.JSX";
import gsap from "gsap";
import { assets } from "../../assets/assets";

const Testimonials = () => {
  const cardRef = useRef([]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      company: "TechStart Inc.",
      image: assets.Afnan_9pm_EDP_100ML,
     
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
    {
      name: "David Kim",
      role: "COO",
      company: "FitLife",   
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      content:    
        "The social media strategy implemented by this agency increased our engagement rates by 300%. Their content creation and ad targeting are top-notch.",
      rating: 5,
      metrics: "300% engagement increase",
    }
  ];

  useEffect(() => {
    // Initial pop-in animation
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }
    );

    // Floating idle animation
    gsap.to(cardRef.current, {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: {
        each: 0.3,
        repeat: -1,
      },
    });
  }, []);

  // Hover lift effect
  const handleMouseEnter = (el) => {
    gsap.to(el, {
      y: -15,
      scale: 1.05,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (el) => {
    gsap.to(el, {
      y: 0,
      scale: 1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="testimonials-section" id="testimonials-section">
      <div className="testimonials-container">
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

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el)}
              className="testimonial-card"
              onMouseEnter={() => handleMouseEnter(cardRef.current[index])}
              onMouseLeave={() => handleMouseLeave(cardRef.current[index])}
            >
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
      </div>
    </section>
  );
};

export default Testimonials;
