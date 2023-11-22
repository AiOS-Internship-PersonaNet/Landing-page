import React from 'react';

const Circle = ({ color, top, left, opacity }) => {
  const circleStyle = {
    position: 'absolute',
    width: '450px',
    height: '400px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: color, // Just the color string without rgba
    opacity: opacity, // Opacity as a separate property
    top: `${top}px`,
    left: `${left}px`,
    filter: 'blur(10px)', // Adjust the blur amount as needed
  };

  return <div style={circleStyle}></div>;
};

export default Circle;