"use client";
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BenefitsSection = () => {
  const FEATURES = [
    {
      title: 'Express Your True Self',
      
      description: 'Description 1',
      additionalText: `With our innovative persona creation tool, you're not just building a profile; you're crafting a digital identity. Answer a few simple questions and let our AI weave a persona that truly represents you.`,
    },
    {
      title: 'Unleash Your Personality',
      
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
    {
      title: 'Unleash Your Personality',
      
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
    {
      title: 'Unleash Your Personality',
      
      description: 'Description 2',
      additionalText: `Create multiple personas that showcase every aspect of your personality. Whether it's engaging in lively debates or sharing a laugh, your personas represent the multifaceted nature of your identity.`,
    },
    // Your feature objects here...
  ];

  const controlsArray = FEATURES.map(() => useAnimation());
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.6 }
        });
      });
    }
  }, [controlsArray, inView]);

  const generateRandomParticles = () => {
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
      ref={ref}
      id="benefits"
      className="flex-col flex-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-8 lg:py-16 mt-[-20px] lg:mt-[-40px] relative"
    >
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch">
        <div className="z-20 flex w-full flex-col lg:w-[60%] mb-8 lg:mb-0 lg:ml-16">
          <div className="relative">
            <h2 className="font-bold text-white text-7xl lg:text-10xl mt-8 lg:mt-0 mb-6 lg:mb-8">Our Benefits</h2>
          </div>
          <ul className="grid gap-4 lg:gap-8 lg:grid-cols-2 ml-0 lg:ml-[-50px]">
            {FEATURES.map((feature, index) => (
              <motion.li
                key={index}
                className="flex w-full flex-1 flex-col items-start"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                animate={controlsArray[index]}
                initial="hidden"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-full p-4 lg:p-7 bg-green-50"
                >
                  {/* Use your feature icon here */}
                  <Image src="/path/to/your/feature/icon.png" alt="icon" width={28} height={28} />
                </motion.div>
                <motion.h2
                  className="font-bold text-base lg:text-xl mt-5 capitalize"
                >
                  {feature.title}
                </motion.h2>
                <motion.p
                  className="text-sm lg:text-base mt-3 text-gray-500"
                >
                  {feature.additionalText}
                </motion.p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 lg:min-h-[300px] order-first lg:order-none">
          <Image
            src="/images/phone.png"
            alt="phone"
            width={440}
            height={500}
            className="feature-phone"
            style={{ opacity: '0.7' }}
          />
        </div>
      </div>

      {/* Particle container */}
      <motion.div
        className="particle-container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {generateRandomParticles()}
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
