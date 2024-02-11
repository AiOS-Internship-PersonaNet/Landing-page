import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import SignupForm from './SignupForm';

// Define styled-components outside of the Phone function
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 25vw;
  margin-left: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 100px;
  }
`;

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
  row-gap: 15px;
`;

const hoverAnimation = keyframes`
  from {
    transform: scale(2.5);
  }
  to {
    transform: scale(2.3);
  }
`;

const HoverableImg = styled.img`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  border-radius: 8px;
  z-index: 1;
  height: auto;
  max-height: calc(100% - 2vw);
  animation: ${hoverAnimation} 2s infinite alternate;
  @media (max-width: 768px) {
    margin-left: 30%;
  }
`;

// Phone component
const Phone = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupClick = () => {
    setIsSignupVisible(true);
  };

  const handleCloseModal = () => {
    setIsSignupVisible(false);
  };

  // Button styles moved inside the component to handle dynamic changes
  const buttonStyle = {
    "--glow-color": "#ff52f8",
    "--glow-spread-color": "rgba(191, 123, 255, 0.781)",
    "--enhanced-glow-color": "rgb(231, 206, 255)",
    "--btn-color": "rgb(100, 61, 136)",
    border: ".25em solid var(--glow-color)",
    padding: "1em 3em",
    color: "var(--glow-color)",
    fontSize: "15px",
    fontWeight: "bold",
    backgroundColor: isButtonHovered ? "var(--glow-color)" : "var(--btn-color)",
    borderRadius: "1em",
    outline: "none",
    boxShadow: isButtonHovered ? 
      "0 0 1em .25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)" :
      "0 0 1em .25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color), inset 0 0 .75em .25em var(--glow-color)",
    textShadow: "0 0 .5em var(--glow-color)",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    position: "relative",
    transform: isButtonHovered ? "translateY(-5px)" : "none"
  };

  return (
    <Container>
      <ImageContainer>
        <HoverableImg src={'/images/heroPic.png'} alt="img" />
      </ImageContainer>
      <ButtonContainer>
        <h1 style={{ fontSize: '67px', zIndex: '3', position: 'relative' }}>
          Persona<span style={{ color: '#ff52f8' }}>NET</span>
        </h1>
        <p style={{ paddingBottom: '1vw', zIndex: '4', marginTop: '-10px', position: 'relative' }}>
          Express, Connect, Thrive | Unleashes Your <br /> Digital Persona for Limitless Connections!
        </p>
        <button
          style={buttonStyle}
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
