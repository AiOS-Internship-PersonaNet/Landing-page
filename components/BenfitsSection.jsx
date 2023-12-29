import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BenefitsSection = () => {
  const FEATURES = [
    {
      title: 'AI-Powered Personas:',
      description: 'Description 1',
      img: '/images/icon1.png',
      additionalText: `Create distinct AI Personas for different life aspects like work or hobbies.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
    {
      title: 'Unique Social Media Experience:',
      description: 'Description 2',
      img: '/images/headPic.png',
      additionalText: `A new, easy, and fun social media platform.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: 'AI Business Personas:',
      description: 'Description 2',
      img: '/images/chat.png',
      additionalText: `Helps in refining marketing and communication strategies based on user interactions and preferences.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
    },
    {
      title: 'Authentic Online Presence:',
      description: 'Description 2',
      img: '/images/background2.png',
      additionalText: `Enables a more genuine self-representation, free from common social media issues.`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>
      ),
    },
  ];

   const controlsArray = FEATURES.map(() => useAnimation());

  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.6 },
        });
      });
    }
  }, [controlsArray, inView]);

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
            {FEATURES.map((feature, index) => {
              const controls = controlsArray[index];

              return (
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
                  animate={controls}
                  initial="hidden"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {feature.icon && (
                    <motion.div
                      className="border-2 border-white rounded-full p-3 shadow-md"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                  )}
                  <motion.h2 className="font-bold text-base lg:text-xl mt-5 capitalize">
                    {feature.title}
                  </motion.h2>
                  <motion.p className="text-sm lg:text-base mt-3 text-gray-500">
                    {feature.additionalText}
                  </motion.p>
                </motion.li>
              );
            })}
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
    </section>
  );
};

export default BenefitsSection;
