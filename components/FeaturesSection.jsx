"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './FeaturesSection.css'

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
      className="items-center justify-center overflow-hidden py-12 md:py-24 relative"
    >
      <h2 className="text-black text-3xl lg:text-5xl font-light mt-0 mb-10 md:mt-0 md:mb-8 absolute top-0 left-1/2 transform -translate-x-1/2" style={{ paddingTop: 30 }}>
        Our Features
      </h2>

        {/* Right border */}
        <motion.div
          className="right-border"
          id="right"
          
          onMouseEnter={handleMiddleBorderHover}
          onMouseLeave={handleMiddleBorderLeave}
        >
          {/* Express Your True Self Content */}
          <h2 style={{ fontSize: 25, paddingBottom: 10, color: 'black' }} className={`${middleBorderHovered ? 'text-lg' : 'text-xl'} ${windowWidth <= 768 ? 'text-xl' : ''}`}>
            Express Your True Self
          </h2>
          <Image
            src="/images/background2.png"
            alt="Description of the image"
            width={800}
            height={600}
            style={{ maxWidth: '70%', height: 'auto', margin: '10px 0' }}
          />
  
          <p
            className={`${windowWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${middleBorderHovered ? '100' : '0'} transition-opacity duration-300 ${middleBorderHovered ? '' : 'hidden'}`}
            onMouseEnter={handleMiddleBorderHover}
            onMouseLeave={handleMiddleBorderLeave}
          >
            With our innovative persona creation tool, you&apos;re not just building a profile; you&apos;re crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.
          </p>
        </motion.div>
  
        {/* Left border */}
        <motion.div
          className="left-border"
          id="left"
          
          onMouseEnter={handleLeftBorderHover}
          onMouseLeave={handleLeftBorderLeave}
        >
          {/* Unleash Your Personality Content */}
          <h2 style={{ fontSize: 25, paddingBottom: 10, color: 'black' }} className={`${leftBorderHovered ? 'text-base' : 'text-lg'} ${windowWidth <= 768 ? 'text-xl' : ''}`}>
            Unleash Your Personality
          </h2>
  
          <Image
            src="/images/persona.png"
            alt="Description of the image"
            width={800}
            height={600}
            style={{ maxWidth: '70%', height: 'auto', margin: '10px 0' }}
          />
  
          <p
            className={`${windowWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${leftBorderHovered ? '100' : '0'} transition-opacity duration-300 ${leftBorderHovered ? '' : 'hidden'}`}
          >
            Create multiple personas that showcase every aspect of your personality. Whether it&apos;s engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.
          </p>
        </motion.div>
  
        {/* Middle border */}
        <motion.div
          className="middle-border"
          id='middle'
          onMouseEnter={handleRightBorderHover}
          onMouseLeave={handleRightBorderLeave}
        >
          {/* Real-Time Engagement and Notifications Content */}
          <h2 style={{ fontSize: 25, paddingBottom: 10, color: 'black' }} className={`${rightBorderHovered ? 'text-base' : 'text-lg'} ${windowWidth <= 768 ? 'text-xl' : ''}`}>
            Real-Time Engagement and Notifications
          </h2>
  
          <Image
            src="/images/chat.png"
            alt="Description of the image"
            width={800}
            height={600}
            style={{ maxWidth: '80%', height: 'auto', margin: '10px 0' }}
          />
  
          <p
            className={`${windowWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${rightBorderHovered ? '100' : '0'} transition-opacity duration-300 ${rightBorderHovered ? '' : 'hidden'}`}
            onMouseEnter={handleRightBorderHover}
            onMouseLeave={handleRightBorderLeave}
          >
            Stay engaged with real-time updates. Whether your persona is getting likes, comments, or matched with like-minded users, you&apos;re always in the loop.
          </p>
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
            background: 'linear-gradient(to right, #ff00cc, #333399)',
            opacity: 0.4,
            zIndex: -1,
          }}
          initial={{ opacity: 0.4 }}
          animate={{
            opacity: 0.7,
          }}
        ></motion.div>
      
    </section>
  );
};

export default FeaturesSection;