"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [middleBorderHovered, setMiddleBorderHovered] = useState(false);
  const [leftBorderHovered, setLeftBorderHovered] = useState(false);
  const [rightBorderHovered, setRightBorderHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleMiddleBorderHover = () => {
    setMiddleBorderHovered(true);
  };

  const handleMiddleBorderLeave = () => {
    setMiddleBorderHovered(false);
  };

  const handleLeftBorderHover = () => {
    setLeftBorderHovered(true);
  };

  const handleLeftBorderLeave = () => {
    setLeftBorderHovered(false);
  };

  const handleRightBorderHover = () => {
    setRightBorderHovered(true);
  };

  const handleRightBorderLeave = () => {
    setRightBorderHovered(false);
  };

  const particleVariants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        duration: 2,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

 

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <section
      id="features"
      className="flex-col items-center justify-center overflow-hidden py-12 md:py-24 relative"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2 className="text-3xl lg:text-5xl font-bold mt-0 mb-4 md:mt-0 md:mb-8 absolute top-0 left-1/2 transform -translate-x-1/2">
        Our Features
      </h2>

      {/* Middle border */}
      <motion.div
        className="middle-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: middleBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
          width: '30%',
          height: '70%',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px',
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          backgroundColor: middleBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
          fontSize: windowWidth <= 768 ? '0.4em' : '1em',
        }}
        onMouseEnter={handleMiddleBorderHover}
        onMouseLeave={handleMiddleBorderLeave}
      >
        {/* Persona Creation Content */}
        <h2 style={{ fontSize: middleBorderHovered ? (window.innerWidth <= 768 ? '1em' : '1em') : '1.5em' }}>Express Your True Self</h2>
        <img
          src="/images/background2.png"
          alt="Description of the image"
          style={{ maxWidth: '70%', height: 'auto', margin: '10px 0' }}
        />
      <p
  style={{
    fontSize: window.innerWidth <= 768 ? '0.5em' : '0.8em',
    opacity: middleBorderHovered ? '1' : '0',
    transition: 'opacity 0.3s ease',
  }}
>
  With our innovative persona creation tool, you're not just building a profile; you're crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.
</p>

      </motion.div>

      {/* Left border */}
      <motion.div
        className="left-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% - 33%)',
          transform: leftBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
          width: '30%',
          height: '70%',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px',
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          backgroundColor: leftBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
          fontSize: windowWidth <= 768 ? '0.4em' : '1em',
        }}
        onMouseEnter={handleLeftBorderHover}
        onMouseLeave={handleLeftBorderLeave}
      >
        {/* Unleash Your Personality Content */}
        <h2 style={{ fontSize: leftBorderHovered ? (window.innerWidth <= 768 ? '1em' : '1em') : '1.5em' }}>
          Unleash Your Personality
        </h2>
        <img
          src="/images/persona.png"
          alt="Description of the image"
          style={{ maxWidth: '70%', height: 'auto', margin: '10px 0' }}
        />
         <p
          style={{
            fontSize: window.innerWidth <= 768 ? '0.5em' : '0.8em',
            opacity: leftBorderHovered ? '1' : '0', // Initially hidden
            transition: 'opacity 0.3s ease',
          }}
        >
          Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.
        </p>
      </motion.div>

      {/* Right border */}
      <motion.div
        className="right-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% + 33%)',
          transform: rightBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
          width: '30%',
          height: '70%',
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px',
          zIndex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          backgroundColor: rightBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
          fontSize: windowWidth <= 768 ? '0.4em' : '1em',
        }}
        onMouseEnter={handleRightBorderHover}
        onMouseLeave={handleRightBorderLeave}
      >
        {/* Real-Time Engagement and Notifications Content */}
        <h2 style={{ fontSize: rightBorderHovered ? (window.innerWidth <= 768 ? '1em' : '1em') : '1.5em' }}>Real-Time Engagement and Notifications</h2>
        <div style={{ padding: '10px', borderRadius: '10px' }}>
          <img
            src="/images/chat.png"
            alt="Description of the image"
            style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }}
          />
        </div>
        <p
    style={{
      fontSize: window.innerWidth <= 768 ? '0.5em' : '0.8em',
      opacity: rightBorderHovered ? '1' : '0', // Initially hidden
      transition: 'opacity 0.3s ease',
    }}
  >
    Stay engaged with real-time updates. Whether your persona is getting likes, comments, or matched with like-minded users, you're always in the loop.
  </p>
      </motion.div>

      
      {/* Animated Background */}
      
    </section>
  );
};

export default FeaturesSection;