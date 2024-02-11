import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import SignupForm from './SignupForm';

// Define styled-components outside of the Phone function


// Define the hover animation
const hoverAnimation = keyframes`
  from {
    transform: scale(2.5);
  }
  to {
    transform: scale(2.3);
  }
`;

// Then use hoverAnimation in your HoverableImg styled component
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 25vw;
  margin-left: 10%;
  width: 100%; // Ensure it takes the full width

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px; // Adjust based on your design
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }

  @media (max-height: 400px) {
    margin-left: 0%;
  }
`;


// If the ImageContainer needs specific ordering
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 20vw;
  
  @media (max-width: 768px) {
    justify-content: center; // Center the image container on mobile
    width: 40%; // Take full width to ensure centering
    margin-bottom: 20px;
  }

  @media (max-height: 400px) {
    display: none;
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px; 
  row-gap: 15px;

  @media (max-width: 768px) {
    margin-left: 0; // Ensure no left margin on mobile for centering
    width: 100%; // Use the full width for content inside
  }
`;

// Adjustments to HoverableImg might not be necessary, but ensure it's not pushing content off to the side
const HoverableImg = styled.img`
  max-width: 600px; // Control max width to not exceed container
  width: 30%; // Adjust based on your preference
  height: auto; // Keep aspect ratio
  border-radius: 8px;
  animation: ${hoverAnimation} 2s infinite alternate;

  @media (max-width: 768px) {
    margin-left: 0;
    display: block; // Use block to help with centering
    width: 60%; // Adjust width as needed for mobile
    margin: 0 auto; // Center the image
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
