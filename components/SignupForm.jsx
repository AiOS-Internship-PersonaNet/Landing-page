"use client";
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const signupForm = ({ onClose }) => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    }
  }, []); 

  const signUp = {
    background : 'white'
  }

  const zoomIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

  const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  animation: ${zoomIn} 01s ease-in-out;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 70px;
  right: 70px;
  font-size: 50px;
  cursor: pointer;
  color: black;
`;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {/* Your signup form content goes here */}
        <div id='signUp' class="elfsight-app-a26e6c29-beb2-493b-bd03-24cde9c8bfdf" style = {signUp} data-elfsight-app-lazy></div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default signupForm;

