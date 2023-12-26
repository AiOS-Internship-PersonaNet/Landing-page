import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      {/* Middle border big screen */}

      {windowWidth > 768 && (
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
          <h2 className={`${middleBorderHovered ? 'text-lg' : 'text-xl'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
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
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${middleBorderHovered ? '100' : '0'} transition-opacity duration-300 ${middleBorderHovered ? '' : 'hidden'}`}
            onMouseEnter={handleMiddleBorderHover}
            onMouseLeave={handleMiddleBorderLeave}
          >
            With our innovative persona creation tool, you&apos;re not just building a profile; you&apos;re crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.
          </p>
        </motion.div>
      )}
         {/* Left border big screen*/}
      {windowWidth > 768 && (
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
          {/* Content for left border */}
          <h2 className={`${leftBorderHovered ? 'text-base' : 'text-lg'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
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
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${leftBorderHovered ? '100' : '0'} transition-opacity duration-300 ${leftBorderHovered ? '' : 'hidden'}`}
          >
            Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.
          </p>
        </motion.div>
      )}

      {/* Right border big screen */}
      {windowWidth > 768 && (
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
          {/* Content for right border */}
          <h2 className={`${rightBorderHovered ? 'text-base' : 'text-lg'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
          Real-Time Engagement and Notifications
          </h2>
          <Image
            src="/images/chat.png"
            alt="Description of the image"
            width={800}
            height={600}
            style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }}
          />
          <p
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${rightBorderHovered ? '100' : '0'} transition-opacity duration-300 ${rightBorderHovered ? '' : 'hidden'}`}
          >
            Stay engaged with real-time updates. Whether your persona is getting likes, comments, or matched with like-minded users, you&apos;re always in the loop.
          </p>
        </motion.div>
      )}

      {/* Borders Container for Small Screens */}
      <div
        className="borders-container"
        style={{
          display: windowWidth <= 768 ? 'flex' : 'none', // Show only on small screens
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '70%',
          position: 'absolute',
          top: '55%',
          transform: 'translateY(-50%)',
        }}
      >
        {/* Middle border small screens */}
        <motion.div
          className="middle-border"
          style={{
            position: 'relative',
            width: '80%',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '20px',
            backgroundColor: middleBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
            fontSize: windowWidth <= 768 ? '0.4em' : '1em',
            marginBottom: '20px',
            textAlign: 'center',
          }}
          onMouseEnter={handleMiddleBorderHover}
          onMouseLeave={handleMiddleBorderLeave}
        >
          {/* Middle border content */}
          <h2 className={`${middleBorderHovered ? 'text-lg' : 'text-xl'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
            Express Your True Self
          </h2>
          <Image
  src="/images/background2.png"
  alt="Description of the image"
  width={800} 
  height={600} 
  style={{
    maxWidth: '50%',
    height: '30',
    margin: '10px auto',
    display: 'block', 
  }}
/>
          <p
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${middleBorderHovered ? '100' : '0'} transition-opacity duration-300 ${middleBorderHovered ? '' : 'hidden'}`}
            onMouseEnter={handleMiddleBorderHover}
            onMouseLeave={handleMiddleBorderLeave}
          >
            With our innovative persona creation tool, you&apos;re not just building a profile; you&apos;re crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.
          </p>
        </motion.div>

        {/* Left border small screens */}
        <motion.div
          className="left-border"
          style={{
            position: 'relative',
            width: '80%',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '20px',
            backgroundColor: leftBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
            fontSize: windowWidth <= 768 ? '0.4em' : '1em',
            marginBottom: '20px',
            textAlign: 'center',
          }}
          onMouseEnter={handleLeftBorderHover}
          onMouseLeave={handleLeftBorderLeave}
        >
          {/* Left border content */}
          <h2 className={`${leftBorderHovered ? 'text-base' : 'text-lg'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
            Unleash Your Personality
          </h2>
          <Image
  src="/images/persona.png"
  alt="Description of the image"
  width={800} 
  height={600} 
  style={{
    maxWidth: '50%',
    height: 'auto',
    margin: '10px auto',
    display: 'block', 
  }}
/>
          <p
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${leftBorderHovered ? '100' : '0'} transition-opacity duration-300 ${leftBorderHovered ? '' : 'hidden'}`}
          >
            Create multiple personas that showcase every aspect of your personality. Whether it&apos;s engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.
          </p>
        </motion.div>

        {/* Right border  small screens*/}
        <motion.div
          className="right-border"
          style={{
            position: 'relative',
            width: '80%',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '20px',
            backgroundColor: rightBorderHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)',
            fontSize: windowWidth <= 768 ? '0.4em' : '1em',
            marginBottom: '20px',
            textAlign: 'center',
          }}
          onMouseEnter={handleRightBorderHover}
          onMouseLeave={handleRightBorderLeave}
        >
          {/* Right border content */}
          <h2 className={`${rightBorderHovered ? 'text-base' : 'text-lg'} ${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-xl' : ''}`}>
            Real-Time Engagement and Notifications
          </h2>
          <Image
  src="/images/chat.png"
  alt="Description of the image"
  width={800} 
  height={600} 
  style={{
    maxWidth: '100%',
    height: 'auto',
    margin: '10px auto', 
    display: 'block', 
  }}
/>
          <p
            className={`${typeof window !== 'undefined' && window.innerWidth <= 768 ? 'text-sm' : 'text-base'} opacity-${rightBorderHovered ? '100' : '0'} transition-opacity duration-300 ${rightBorderHovered ? '' : 'hidden'}`}
            onMouseEnter={handleRightBorderHover}
            onMouseLeave={handleRightBorderLeave}
          >
            Stay engaged with real-time updates. Whether your persona is getting likes, comments, or matched with like-minded users, you&apos;re always in the loop.
          </p>
        </motion.div>
      </div>

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
