import React from 'react'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import { ShoppingBag , Heart ,CircleUserRound , Search ,Settings , MessageSquareQuote, House, Menu ,Store ,Contact , UserRound,ChevronLeft ,ChevronRight,X, ChevronDown ,ChevronUp, Contact2} from 'lucide-react';
import './Navbar.css'
import Accordian from '../Accordian/Accordian';
const Navbar = () => {

    const [hoveredLink, setHoveredLink] = useState(null);
      const [isOpen, setIsOpen] = useState(false);
        const toggleSidebar = () => {
            setIsOpen(!isOpen);
        };

  return (
 <>
  
      <nav className='navbar'   >

<section className='logo'   >Scalix</section>
<section className='nav-links'  >


     <a href='#services-section' className="nav-link   withdropdown     " activeClassName="active">Services </a>
    
    <a  href="#testimonials-section"  className="nav-link" activeClassName="active">Testimonials</a>
    <a href='#cta-section' className="nav-link" activeClassName="active">Contact</a>


</section>

     <section   className='btn-section'  >
        
        <button className='get-started-btn'  >Get Started</button>        
         </section>


 <Menu  onClick={toggleSidebar} className='menu-button' color="#000000" strokeWidth={1.5} absoluteStrokeWidth />

      </nav>
  <aside
          className={`sidebar ${isOpen ? "open" : ""}`}
          aria-label="Mobile menu"
        >
          <div className="sidebar-header">
            <button
              className="close-button"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
           <ChevronLeft color="#000000" strokeWidth={1} absoluteStrokeWidth size={20} /> 
              <span>     Back</span>

            </button>
          </div>

          <div className="sidebar-content">
            <NavLink  onClick={toggleSidebar} className="sidebar-link">
               <Contact    strokeWidth={1} absoluteStrokeWidth size={20}       />
     Contacts
    
            </NavLink>
            <NavLink
              
              onClick={toggleSidebar}
              className="sidebar-link"
            >
      <MessageSquareQuote size={20} strokeWidth={1}/>
      Testimonials
            </NavLink>
           


          {/* Accordian no 1 */}
 


 
<span className='acc-span'>  <Settings className='setting-icon' size={20} color='#000000' strokeWidth={1} absoluteStrokeWidth />  
   <Accordian id="item-services" title="Services"> 
      <NavLink 
      
      className="acc-link"     activeClassName="active"> Meta Ads</NavLink>
     <NavLink  className="acc-link" activeClassName="active">Shopify Store Creation</NavLink>
      <NavLink  className="acc-link" activeClassName="active"> Rebranding</NavLink>
       <NavLink  className="acc-link" activeClassName="active">Social Media Management</NavLink>
</Accordian>
</span> 
{/* -------------------------------------------------------------- */}





          




          

          </div>

          <div className="sidebar-footer">
            <div className="social-links">
             
            
          


            </div>
             <p    className="copyright"       >© {new Date().getFullYear()} Scalix. All rights reserved.</p>
     </div>
        </aside>


</>

  )
}

export default Navbar
