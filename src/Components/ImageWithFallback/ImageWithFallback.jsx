import React from 'react'
import './ImageWithFallback.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';




const ImageWithFallback = (props) => {
  const { src, alt, className = "", ...rest } = props;

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };


  return  didError  ?(
   <div className={`fallback-container ${className}`}>
      <div className="fallback-inner">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} {...rest} onError={handleError} />
  )
}

export default ImageWithFallback
