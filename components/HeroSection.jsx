"use client";
import React, { useState, useEffect } from "react";
import '/styles.css';
import Phone from './phone';
import Design from "./Design";


const HeroSection = () => {

  const [initialPosition, setInitialPosition] = useState('translateY(100%)');

  useEffect(() => {
    // Set a timeout to delay the animation start
    const timeout = setTimeout(() => {
      setInitialPosition('translateY(0)');
    }, 550);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);




  return (
    <section style={{ overflow: 'hidden',}} className="flex flex-col items-center justify-center h-screen w-full  hover:from-blue-600 hover:to-teal-600 text-white font-medium py-2.5 px-5   transition relative">

      
    <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-end justify-center"
        style={{
          //background: 'radial-gradient(circle at 0% 0%, #220138, #2b0399, #220138)',
          background:'#f2f2f2',
          backgroundPosition: 'center', // Center the background image
          backgroundSize: 'fill', 
          backgroundRepeat: 'no-repeat',
          bottom:'0',
          top: 'auto',
          zIndex: '0'
        }}
      ></div>

     


    <Design id="tsparticles" style={{ zIndex: '0' }}/>

    <Phone/>

      

      {/* Mobile Device Frame */}
      <div className="relative max-w-[90%]">
        {/* Top and Bottom part of phone */}
        <div
          className="bg-gray-400 w-4 h-1 rounded-full mx-auto mb-1 overflow-hidden"
          style={{ borderRadius: '30px 30px 0 0', display: 'none' }}
        ></div>
        {/* Screen */}
        <div className="relative overflow-hidden">
          {/* Content with Smaller Image */}
          <div className="p-6 relative text-center"></div>
          {/* End of Content with Smaller Image */}
        </div>
        {/* Bottom part of phone */}
        <div
          className="bg-gray-400 w-4 h-1 rounded-full mx-auto mt-1"
          style={{ borderRadius: '50%', display: 'none' }}
        ></div>
      </div>
      {/* End of Mobile Device Frame */}


    </section>
  );
};

export default HeroSection;