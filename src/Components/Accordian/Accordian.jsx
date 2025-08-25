import React from 'react'
import './Accordian.css'
const Accordian = ({ id, title, children }) => {
  return (
   <>
    <div className="accordion-item">
      <input type="checkbox" id={id} className="accordion-checkbox" />
      <label htmlFor={id} className="accordion-header">
        {title}
      </label>
      <div className="accordion-content">{children}</div>
    </div>
   
   
   </>
  )
}

export default Accordian
