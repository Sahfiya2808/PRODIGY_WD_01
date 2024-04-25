import React, { useState, useEffect } from 'react';
import './Navigation.css'; 
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#333'); 

  
  const handleScroll = () => {
    const isScrolled = window.scrollY > 100; 
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  
  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color; 
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Details</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      

      
      <div className="color-options">   
        <span className="color-option" onClick={() => handleColorChange('#0000FF')} style={{ backgroundColor: '#0000FF' }}></span>
        <span className="color-option" onClick={() => handleColorChange('#555')} style={{ backgroundColor: '#555' }}></span>
        <span className="color-option" onClick={() => handleColorChange('#ff3333')} style={{ backgroundColor: '#ff3333' }}></span>
        <span className="color-option" onClick={() => handleColorChange('#00FF00')} style={{ backgroundColor: '#00FF00' }}></span>
        <span className="color-option" onClick={() => handleColorChange('#A020F0')} style={{ backgroundColor: '#A020F0' }}></span>
        
      </div>

    </nav>
    
  );
};

export default Navigation;
