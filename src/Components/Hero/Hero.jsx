import React, { useEffect } from 'react'
import './Hero.css'
import { useRef } from 'react'
import { Repeat } from 'lucide-react';
import gsap from 'gsap';


import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const Hero = () => {

  const box1ref = useRef(null);

  const box2ref = useRef(null);
   const textRef = useRef(null);

  

  useEffect(()=>{
    gsap.fromTo(box1ref.current,    { y: 50 }, 
      {
        y: -50,   // Move up
        duration: 2,
        yoyo: true,
        repeat: -1, // Change to -1 for infinite loop
        ease: "power1.inOut"
      })
  },[]);


    useEffect(()=>{
    gsap.fromTo(box2ref.current,    { y: 50 }, // Start below
      {
        y: -50,   // Move up
        duration: 2,
        yoyo: true,
        repeat: -1, // Change to -1 for infinite loop
        ease: "power1.inOut"
      })
  },[]);


     useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { text: "" }, // start with empty
      {
        text: "with Expert Digital Marketing Agency.",
       duration: 4,
       repeat:1,
        ease: "power1.inOut",
        
      

      }
    );
  }, []);
  
  return (



   <>
   <section className="hero-section">
 
  <div className="background-elements">
    <div className="bg-circle indigo-circle"></div>
    <div className="bg-circle purple-circle"></div>
  </div>

  <div className="hero-container">
    <div className="hero-grid">
   
      <div className="hero-left">
        <div className="tagline">
          🚀 #1 Marketing Agency
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            Your Business Growth Partner <span ref={textRef} ></span>   <span  className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">
            We help businesses grow with Meta Ads, Shopify development, brand redesigns, 
            and conversion-optimized strategies that drive real results.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="btn-gradient">Start Your Project ➜</button>
           <button className="btn-outline">▶ Watch Demo</button> 
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="stat-value">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="divider"></div>
          <div  className="hero-stat-item">
            <div className="stat-value">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="divider"></div>
          <div  className="hero-stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>

      
      <div className="hero-right">
        <div className="stats-card">
          <div className="card-header">
            <h3>Campaign Performance</h3>
            <div className="status-dot"></div>
          </div>
          <div className="stat-row">
            <span>Meta Ads ROAS</span>
            <span className="green-text">4.2x</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-grid">
            <div className="text-center">
              <div className="stat-value indigo-text">+150%</div>
              <div className="stat-label">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="stat-value purple-text">-60%</div>
              <div className="stat-label">Cost Per Lead</div>
            </div>
          </div>
        </div>

        <div ref={box1ref} className="floating-card indigo-floating">
          <div className="floating-title">New Lead!</div>
          <div className="floating-subtitle">Shopify Store</div>
        </div>

        <div ref={box2ref} className="floating-card purple-floating">
          <div className="floating-title">+25% CTR</div>
          <div className="floating-subtitle">Meta Campaign</div>
        </div>
      </div>
    </div>
  </div>
</section>

   
   
   </>
  )
}

export default Hero
