"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const FeaturesSection = () => {
  const [middleBorderHovered, setMiddleBorderHovered] = useState(false);
  const [leftBorderHovered, setLeftBorderHovered] = useState(false);
  const [rightBorderHovered, setRightBorderHovered] = useState(false);

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

  const generateRandomParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push(
        <motion.div
          key={i}
          className="particle"
          style={{
            backgroundColor: '#FFFFFF',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
        ></motion.div>
      );
    }
    return particles;
  };

  return (
    <section
      id="features"
      className="flex-col items-center justify-center overflow-hidden py-24 relative"
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
      <h2 className="text-4xl lg:text-6xl font-bold mt-0 mb-8 absolute top-0 left-1/2 transform -translate-x-1/2">
        Our Features
      </h2>

      {/* Middle border */}
      <motion.div
        className="middle-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%', // Adjusted left position for the middle border
          transform: 'translate(-50%, -50%)',
          width: '30%', // Adjust the width of the middle border to create space
          height: '70%', // Adjust the height of the middle border
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px', // Making the middle border curved
          zIndex: '1', // Ensure the middle border is above the background
          boxSizing: 'border-box', // Include border in element size
          padding: '20px', // Padding for content inside the middle border
          backgroundColor: middleBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)', // Background inside the middle border
          color: 'white', // Text color inside the middle border
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease', // Adding transition property for both transform and background-color
          transform: middleBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
        }}
        onMouseEnter={handleMiddleBorderHover}
        onMouseLeave={handleMiddleBorderLeave}
      >
        {/* Persona Creation Content */}
        <h2 style={{ fontSize: middleBorderHovered ? '2.5em' : '2em' }}>Express Your True Self</h2>
        {middleBorderHovered && (
          <img
            src="/images/background2.png"
            alt="Description of the image"
            style={{ maxWidth: '73%', height: 'auto', margin: '20px 0' }}
          />
        )}
        <p style={{ fontSize: '0.9em' }}>With our innovative persona creation tool, you're not just building a profile; you're crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.</p>
      </motion.div>

      {/* Left border */}
      <motion.div
        className="left-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% - 33%)', // Adjust left position for spacing
          transform: leftBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
          width: '30%', // Adjust the width of the left border
          height: '70%', // Adjust the height of the left border
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px', // Making the left border curved
          zIndex: '1', // Ensure the left border is above the background
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease', // Adding transition for backgroundColor
          backgroundColor: leftBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)', // Background inside the left border
        }}
        onMouseEnter={handleLeftBorderHover}
        onMouseLeave={handleLeftBorderLeave}
      >
        {/* Unleash Your Personality Content */}
        <h2 style={{ fontSize: leftBorderHovered ? '2.5em' : '2em' }}>Unleash Your Personality</h2>
        {leftBorderHovered && (
          <img
            src="/images/persona.png"
            alt="Description of the image"
            style={{ maxWidth: '68%', height: 'auto', margin: '20px 0' }}
          />
        )}
        <p style={{ fontSize: '0.9em' }}>Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.</p>
        {/* Positioning "Unleash Your Personality" in the middle of the left border */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          
        </motion.div>
      </motion.div>

      {/* Right border */}
      <motion.div
        className="right-border"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc(50% + 33%)', // Adjust left position for spacing
          transform: rightBorderHovered ? 'translate(-50%, -55%)' : 'translate(-50%, -50%)',
          width: '30%', // Adjust the width of the right border
          height: '70%', // Adjust the height of the right border
          border: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px', // Making the right border curved
          zIndex: '1', // Ensure the right border is above the background
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, background-color 0.3s ease', // Adding transition for backgroundColor
          backgroundColor: rightBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)', // Background inside the right border
        }}
        onMouseEnter={handleRightBorderHover}
        onMouseLeave={handleRightBorderLeave}
      >
        {/* Real-Time Engagement and Notifications Content */}
        <h2 style={{ fontSize: rightBorderHovered ? '2.5em' : '2em' }}>Real-Time Engagement and Notifications</h2>
        {rightBorderHovered && (
          <img
            src="/images/chat.png"
            alt="Description of the image"
            style={{ maxWidth: '73%', height: 'auto', margin: '20px 0' }}
          />
        )}
        <p style={{ fontSize: '0.9em' }}>Stay engaged with real-time updates. Whether your persona is getting likes, comments, or matched with like-minded users, you're always in the loop.
</p>
        {/* Positioning "Real-Time Engagement and Notifications" in the middle of the right border */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          
        </motion.div>
      </motion.div>
      
      {/* Animated Background */}
      <motion.div
        className="animated-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #ff00cc, #333399)', // Your desired gradient or color
          opacity: 0.4,
          zIndex: -1, // Behind other elements
        }}
        initial={{ opacity: 0.4 }}
        animate={{
          opacity: 0.7, // Animate the opacity for a subtle effect
        }}
      ></motion.div>

      {/* Particles */}
      {generateRandomParticles()}
     

      {/* Rest of your content */}
      {/* Your existing content */}
    </section>
  );
};

export default FeaturesSection;
