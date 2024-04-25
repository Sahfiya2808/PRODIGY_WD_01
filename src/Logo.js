import React, { useState } from 'react';

const Logo = () => {
  const [textColor, setTextColor] = useState('black');

  const handleClick = () => {
    
    const colors = ['red', 'green', 'blue', 'orange', 'purple']; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    setTextColor(randomColor); 
  };

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.text, color: textColor }} onClick={handleClick}>Interactive Navigation</h1>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZelZlhkPARY2pFjKoslPiPlWZIHn3PopjA&s'} alt="Logo" style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  },
  logo: {
    width: '500px', 
    height: 'auto', 
  },
  text: {
    fontSize: '24px', 
    marginBottom: '20px', 
    cursor: 'pointer', 
  },
};

export default Logo;
