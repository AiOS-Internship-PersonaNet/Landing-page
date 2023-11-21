import React from 'react';
import '/styles.css';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-600 hover:to-teal-600 text-white font-medium py-2.5 px-5 rounded-lg  transition relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/background.png')`, // Path to your image
          backgroundPosition: 'center', // Center the background image
          backgroundSize: 'cover', // Adjust the background size
        }}
      ></div>

      {/* Mobile Device Frame */}
      <div className="relative max-w-[90%]">
        {/* Top and Bottom part of phone */}
        <div
          className="bg-gray-400 w-4 h-1 rounded-full mx-auto mb-1 overflow-hidden"
          style={{ borderRadius: '30px 30px 0 0', background: 'black' }}
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
          style={{ borderRadius: '50%', background: 'black' }}
        ></div>
      </div>
      {/* End of Mobile Device Frame */}
    </section>
  );
};

export default HeroSection;
