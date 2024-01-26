"use client";
import React, { useState, useEffect } from "react";
import styled,  { keyframes } from 'styled-components';
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
  column-gap: 25vw;
  margin-left:10%;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 35%;
  }
`;

  

  const title = {
    fontSize:'67px',
    zIndex: '3',
    position: 'relative',
   
  };

  const Title = styled.h1`
  font-size: 67px;
  z-index: 3;
  position: relative;

  @media (max-width: 500px) {
    font-size: 40px; /* Adjust the font size as needed for smaller screens */
  }

  span {
    color: #ff52f8;
  }
`;

  const Button = {
    "--glow-color": "rgb(255, 82, 248, 0.581)", // Neon pink color
    "--glow-spread-color": "rgba(191, 123, 255, 0.581)",
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
    transition: "all 1s",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
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
    color:'black'
  };

  const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px; 
  row-gap:15px;

  @media (max-width: 768px) {
    margin-right:16%
  }
`;


  const hoverAnimation = keyframes`
  from {
    transform: scale(2.5);
  }
  to {
    transform: scale(2.3); // Adjust the scale factor as needed
  }
`;

const HoverableImg = styled.img`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  max-width: 600px; // Increase this value to make the image wider
  border-radius: 8px;
  z-index: 1;
  height: auto;
  max-height: calc(100% - 2vw);
  animation: ${hoverAnimation} 2s infinite alternate; 

  @media (max-width: 768px) {
    margin-left:30%
  }

`;

return (
  <Container>
    <ImageContainer>
      <div>
        <HoverableImg
          src={'/images/heroPic.png'}
          alt="img"
        />
      </div>
    </ImageContainer>

    <ButtonContainer>
      <Title style={{color:'black'}}>

          Persona<span style={{ color: '#ff52f8' }}>NET</span>
      </Title>

        <h2 style={Text}>
          Express, Connect, Thrive | Unleashes Your <br /> Digital Persona for Limitless Connections!
        </h2>

        <button
          style={Button}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={handleSignupClick}
        >
          Sign Up
        </button>

        {isSignupVisible && <SignupForm onClose={handleCloseModal} />}
    </ButtonContainer>
  </Container>
);
};

export default Phone;