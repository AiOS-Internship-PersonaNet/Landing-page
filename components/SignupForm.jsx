"use client";
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SignupForm = ({ onClose }) => {
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
    };
  }, []);

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
    animation: ${zoomIn} 0.1s ease-in-out;
  `;

  const CloseButton = styled.span`
    position: absolute;
    top: 70px;
    right: 70px;
    font-size: 50px;
    cursor: pointer;
  `;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#0a0a0a",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "24px",
              marginBottom: "15px",
            }}
          >
            Create your{" "}
            <span style={{ fontStyle: "italic", color: "#c62828" }}>
              SuperIntro
            </span>
          </h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={{
                width: "90%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#1c1c1c",
                color: "#fff",
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "90%",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "#1c1c1c",
                color: "#fff",
              }}
            />
            <div style={{ position: "relative", width: "90%", margin: "10px auto" }}>
              <input
                type="phone"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                }}
              />
              <button
                type="button"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                
              </button>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#c62828",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignupForm;

