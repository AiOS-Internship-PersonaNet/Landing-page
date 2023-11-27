"use client";
import React, { useState, useEffect } from "react";
import Circle from './Circle';

const Phone = (index) => {

  const [initialPosition, setInitialPosition] = useState('translateY(100%)');
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    // Set a timeout to delay the animation start
    const timeout = setTimeout(() => {
      setInitialPosition('translateY(0)');
    }, 400);
  
    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  
  useEffect(() => {
    // Add a class to apply the fade-in effect after the initial animation
    const fadeTimeout = setTimeout(() => {
      setInitialPosition('translateY(0) fadeIn');
    }, 800);
  
    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(fadeTimeout);
  }, []);



  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '80%',
    height: '45%',
    maxWidth: '500px', // Set a fixed width for the phone container

  };

  const background = {
    width: '35%',
    height: '90%',
    borderRadius: '10% 10% 0 0',
    background: 'linear-gradient(to bottom, #232323, #4A4A4A)',
    overflow: 'hidden',
    position: 'absolute',
    bottom:0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '0px',
    transform: `translate(-50%, 0) ${initialPosition}`,

    transition: 'transform 1s ease-out, opacity 1s ease-out', // Apply a smooth transition
    opacity: initialPosition.includes('fadeIn') ? 1 : 0, // Initial opacity is set based on the class
  };
  

  const title = {
    fontSize: '5vw',
    zIndex: '3',
    marginTop:'-10%'
  };

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  const Button = {
    background: 'linear-gradient(to bottom, #dfc700, #d0bb00)',
    width: isButtonHovered ? '55%' : '50%', // Adjust the width on hover
    height: isButtonHovered ? '10%' : '8%', // Adjust the height on hover
    color: 'black',
    borderRadius: '50px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1',
    marginTop: '10px',
    transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out', // Slow down the transition
  };


  if (isButtonHovered) {
    Button.transform = 'translateY(-5px)';
  }

  const Text = {
    paddingBottom: '1vw',
    zIndex: '1',
    marginTop: '-10px',
    fontSize: '1vw',
  };

  const overlay = {
    position: 'absolute',
    width: '95%',
    height: '8%',
    background: 'linear-gradient(to bottom, transparent, black)',
    borderRadius: '8px',
    zIndex: '3',
    bottom: '0%',
  };

  const circle = (top, left, width, height) => ({
    filter: 'blur(50px)',
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    transform: 'translate(-50%, -50%)',
    width: `${width}px`,
    height: `${height}px`,
    zIndex: '-6',
  });

  return (

      <div style={background}>
        <Circle color="#FF00EC" opacity={1} top={20} left={0} width={'5px'} height={5} style={circle(20, 50, 10, 10)} />
        <Circle color="#0008FF" opacity={1} top={50} left={300} width={30} height={30} style={circle(50, 70, 30, 30)} />
        <Circle color="#FF00EC" opacity={.7} top={80} right={900} width={'5px'} height={5} style={circle(20, 50, 10, 10)} />
        <Circle color="#0008FF" opacity={.7} top={150} left={500} width={30} height={30} style={circle(50, 70, 30, 30)} />
        <div style={containerStyle}>
          <img
            src={'/images/headPic.png'}
            alt="img"
            style={{ display: 'flex', width: '95%', alignItems: 'center', maxWidth: '100%', borderRadius: '8px', zIndex: '1', height: '100%', }}
          />

          <div style={overlay}></div>
        </div>

        <h1 style={title}>
          Persona<span style={{ color: '#ff52f8' }}>NET</span>
        </h1>

        <h2 style={Text}>
          Express, Connect, Thrive | Unleashes Your <br /> Digital Persona for Limitless Connections!
        </h2>

        <button style={Button}  onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>Sign Up</button>
      </div>
  );
};

export default Phone;