import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './FeaturesSection.css'; // Adjust the path as needed

const FeaturesSection = () => {
  const [hovered, setHovered] = useState('');

  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>

      <div className="features-container">
        <Feature
          title="Express Your True Self"
          description="With our innovative persona creation tool, you're not just building a profile; you're crafting a digital identity."
          imgSrc="/images/background2.png"
          altText="Express Your True Self"
          hovered={hovered}
          setHovered={setHovered}
          position="middle"
        />

        <Feature
          title="Unleash Your Personality"
          description="Create multiple personas that showcase every aspect of your personality."
          imgSrc="/images/persona.png"
          altText="Unleash Your Personality"
          hovered={hovered}
          setHovered={setHovered}
          position="left"
        />

        <Feature
          title="Real-Time Engagement and Notifications"
          description="Stay engaged with real-time updates."
          imgSrc="/images/chat.png"
          altText="Real-Time Engagement"
          hovered={hovered}
          setHovered={setHovered}
          position="right"
        />
      </div>

      <motion.div className="animated-background" />
    </section>
  );
};

const Feature = ({ title, description, imgSrc, altText, hovered, setHovered, position }) => (
  <motion.div
    className={`feature ${position}-border ${hovered === position ? 'hovered' : ''}`}
    onMouseEnter={() => setHovered(position)}
    onMouseLeave={() => setHovered('')}
  >
    <h2>{title}</h2>
    <Image src={imgSrc} alt={altText} width={800} height={600} className="feature-image" />
    <p className={`feature-description ${hovered === position ? 'show' : ''}`}>{description}</p>
  </motion.div>
);

export default FeaturesSection;
