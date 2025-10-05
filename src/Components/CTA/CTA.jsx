import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./CTA.css";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const benefitsRef = useRef([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // No Firebase - dummy success handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a success action
    alert("We will contact you soon!");
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  useEffect(() => {
    // LEFT
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // RIGHT
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // BENEFITS
    benefitsRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="cta-section" className="cta-section">
      <div className="cta-container">
        <div className="cta-grid">
          {/* Left Content */}
          <div className="cta-left" ref={leftRef}>
            <div className="cta-badge">✨ Let’s Work Together</div>
            <h2 className="cta-heading">
              Ready to <span className="highlight">Grow Your Business?</span>
            </h2>
            <p className="cta-text">
              We help businesses scale through smart digital marketing, brand
              building, and cutting-edge web solutions. Book your free
              consultation today and let’s create something powerful.
            </p>

            <div className="cta-benefits">
              {[
                "✔ Free 30-minute consultation",
                "✔ Tailored growth strategies",
                "✔ No hidden costs or commitments",
                "✔ Dedicated 24/7 support",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item"
                  ref={(el) => (benefitsRef.current[index] = el)}
                >
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="cta-info">
              <span>📞 +92 330 4393 035</span>
              <span>✉️ info@scalix.co</span>
              <span>📍 Lahore, Pakistan</span>
              <span>⏰ Available 24/7</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="cta-form-wrapper" ref={rightRef}>
            <div className="cta-card">
              <h3 className="cta-form-title">Get Your Free Consultation</h3>
              <form onSubmit={handleSubmit} className="cta-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="meta-ads">Meta Ads Management</option>
                  <option value="shopify-creation">
                    Shopify Store Creation
                  </option>
                  <option value="brand-rebranding">Brand Rebranding</option>
                  <option value="shopify-redesign">Shopify Redesign</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
                <button type="submit" className="cta-btn">
                  🚀 Get Free Consultation
                </button>
              </form>
              <p className="cta-note">
                ⚡ We’ll respond within 24 hours. No spam, guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
