import React from 'react';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import CTA from '../Components/CTA/CTA';
import Tesimonials from '../Components/Testimonials/Tesimonials';

const Main = () => {
  return (
    <main    className="main-content">
    <Hero/>
    <Services/>

 <CTA/>
 <Tesimonials/>

    </main>
  )
}

export default Main
