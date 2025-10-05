import React, { use } from 'react'
import './Services.css'


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback';
import { useRef , useEffect } from 'react';

import { TrendingUp ,Star,Users ,Sparkle, Sparkles ,ArrowRight, Target,Share2 ,ShoppingCart,Palette } from 'lucide-react';




const Services = () => {

   const textRef = useRef(null);

    const subtitleRef = useRef(null);
     const sectionTitleRef = useRef(null);
  useEffect(() => {
   gsap.from(sectionTitleRef.current, {
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  
     gsap.fromTo(
      subtitleRef.current,
      
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  
  } , []);
     

  useEffect(() => {
    gsap.from(textRef.current, {

         scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: "top 85%",
      },
      y: -40,    
      repeat: 2,
      duration: 2,
   
      ease: "power3.out",
    });
  }, []);


  const services = [
    {
      title: "Meta Ads Management",
      icon: <Target strokeWidth={1.5} absoluteStrokeWidth width={50} />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NTU2MTAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Strategic Facebook and Instagram advertising campaigns that drive real results for your business.",
      features: [
        "Custom audience targeting",
        "A/B testing optimization",
        "Conversion tracking setup",
        "Creative asset development",
        "Performance analytics & reporting"
      ],
      benefits: [
        "Increase brand awareness by 300%",
        "Generate qualified leads consistently",
        "Reduce cost per acquisition",
        "Scale profitable ad campaigns"
      ],
      price: "Starting from $1,500/month"
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 strokeWidth={1.5} absoluteStrokeWidth width={50} />,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NTU2MDQ1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comprehensive social media strategy and management across all major platforms to build your online presence.",
      features: [
        "Content calendar planning",
        "Multi-platform posting",
        "Community management",
        "Influencer partnerships",
        "Social media analytics"
      ],
      benefits: [
        "Build engaged community",
        "Increase organic reach",
        "Enhance brand reputation",
        "Drive website traffic"
      ],
      price: "Starting from $800/month"
    },
    {
      title: "Shopify Store Creation",
      icon:  <ShoppingCart strokeWidth={1.5} absoluteStrokeWidth width={50} /> ,
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9waWZ5JTIwZWNvbW1lcmNlfGVufDF8fHx8MTc1NTY3ODY4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete e-commerce solutions built on Shopify to help you sell online effectively and efficiently.",
      features: [
        "Custom theme development",
        "Product catalog setup",
        "Payment gateway integration",
        "SEO optimization",
        "Mobile-responsive design"
      ],
      benefits: [
        "Start selling online quickly",
        "Professional store appearance",
        "Seamless customer experience",
        "Scalable growth platform"
      ],
      price: "Starting from $2,500"
    },
    {
      title: "Brand Rebranding",
      icon: <Palette strokeWidth={1.5} absoluteStrokeWidth width={50} /> ,
      image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTU2Nzg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete brand transformation including logo design, visual identity, and brand guidelines.",
      features: [
        "Logo design & refinement",
        "Brand identity system",
        "Color palette & typography",
        "Marketing materials design",
        "Brand guidelines document"
      ],
      benefits: [
        "Stand out from competitors",
        "Build brand recognition",
        "Increase customer trust",
        "Professional brand presence"
      ],
      price: "Starting from $3,000"
    }
  ];

  const stats = [
    { number: "20+", label: "Successful Campaigns", icon:     <TrendingUp strokeWidth={1.5} absoluteStrokeWidth width={22} />  },
    { number: "5M+", label: "Ad Impressions", icon: <Target strokeWidth={1.5} absoluteStrokeWidth width={22}  /> },
    { number: "50+", label: "Happy Clients", icon:     <Users strokeWidth={1.5} absoluteStrokeWidth width={22}/> },
    { number: "4.9/5", label: "Client Rating", icon:   <Star strokeWidth={1.5} absoluteStrokeWidth width={22} /> }
  ];




  return (
    <>
   
      {/* Hero Section */}
      <section className="services-section"    id='services-section'    >
        <div className="service-content">
          <span className="badge">
          <Sparkle className="icon" />
            Marketing Agency Services
          </span>
          <h1 ref={textRef} className="service-title">
            Grow Your Business with
            <span>Expert Marketing Solutions</span>
          </h1>
          <p  ref={subtitleRef}  className="service-subtitle">
            We help businesses scale through strategic digital marketing, e-commerce solutions,
            and brand development. From Meta ads to complete rebranding, we've got you covered.
          </p>
          <div className="service-buttons">
          
            <button className="btn">View Our Work</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h2    ref={sectionTitleRef}    >      Our Services</h2>
          <p>Comprehensive marketing solutions designed to drive growth and maximize your ROI</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-img-wrapper">
                <ImageWithFallback src={service.image} alt={service.title} className="service-img" />
                
                <div className='service-image-wrapper'    >
                <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-details">
                <div>
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                   {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Key Benefits:</h4>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>
                       {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <button className="btn btn-primary">
                    Get Started <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      
    
    </>
  )
}

export default Services
