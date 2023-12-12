"use client";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SignupForm from './SignupForm'; 

const Phone = (index) => {

  const [initialPosition, setInitialPosition] = useState('translateY(100%)');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupClick = () => {
    setIsSignupVisible(true);
  };

  const handleCloseModal = () => {
    setIsSignupVisible(false);
  };

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

  const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

  const textLayout = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center'
  }

  const title = {
    fontSize:'68px',
    zIndex: '3',
    position: 'relative',
  };

  const Button = {
    "--glow-color": "#ff52f8", // Neon pink color
    "--glow-spread-color": "rgba(191, 123, 255, 0.781)",
    "--enhanced-glow-color": "rgb(231, 206, 255)",
    "--btn-color": "rgb(100, 61, 136)",
    border: ".25em solid var(--glow-color)",
    padding: "1em 3em",
    color: "var(--glow-color)",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: "var(--btn-color)",
    borderRadius: "1em",
    outline: "none",
    boxShadow:
      "0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)",
    textShadow: "0 0 .5em var(--glow-color)",
    position: "relative",
    transition: "all 0.3s",
    cursor: "pointer",
  };
  if (isButtonHovered) {
    Button.transform = "translateY(-5px)";
    Button.backgroundColor = "var(--glow-color)"; // Change background on hover
    Button.boxShadow = "0 0 1em .25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)";
    Button.color = "rgba(76, 0, 39, 0.8)";
  }

  const Text = {
    paddingBottom: '1vw',
    zIndex: '4',
    marginTop: '-10px',
    position: 'relative',
  };

  const imgStyle = {
    position: 'relative', // Make the container relative to position pseudo-element
    display: 'flex',
    width: '95%',
    alignItems: 'center',
    justifyContent:'center',
    left:'4%',
    maxWidth: '455px',
    borderRadius: '8px',
    zIndex: '1',
    height: 'auto',
    maxHeight: 'calc(100% - 2vw)',
    transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out',
  
  };
 
  


  return (

  <Container >
    <div>
      <img
        src={'/images/headPic.png'}
        alt="img"
        style={imgStyle}
      />
    </div>

    <div style={textLayout}>
      <h1 style={title}>
        Persona<span style={{ color: '#ff52f8' }}>NET</span>
      </h1>

      <h2 style={Text}>
        Express, Connect, Thrive | Unleashes Your <br /> Digital Persona for Limitless Connections!
      </h2>

      <button style={Button}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleSignupClick}> Sign Up </button>

      {isSignupVisible && <SignupForm onClose={handleCloseModal} />}
    </div>
  </Container>  
  );
};

export default Phone; 
