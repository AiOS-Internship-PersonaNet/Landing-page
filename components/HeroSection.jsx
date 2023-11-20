import React from 'react';
import '/styles.css';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 relative">
      {/* Background Image */}
      <div
  className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url('/images/background1.png')`, // Path to your image
    backgroundPosition: 'center', // Center the background image
    backgroundSize: 'cover', // Adjust the background size
  }}
></div>

      {/* Mobile Device Frame */}
      <div className="relative max-w-[90%]">
        {/* Top and Bottom part of phone */}
        <div className="bg-gray-400 w-4 h-1 rounded-full mx-auto mb-1 overflow-hidden" style={{ borderRadius: '30px 30px 0 0', background: 'linear-gradient(to right, #00FFFF, #8A2BE2, #D3D3D3)' }}></div>
        {/* Screen */}
        <div className="relative overflow-hidden">
          {/* Border with a different shape */}
          <div
            className="border-4 border-solid bg-black relative"
            style={{
              borderRadius: '20px', // Adjust the border shape here
              borderImage: 'linear-gradient(to right, #00FFFF, #8A2BE2, #D3D3D3) 1',
            }}
          >
            {/* Content */}
            <div className="p-6 relative text-center">
              {/* App Name */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif">
               
                <span className="border-text-blue">P</span>
                <span className="border-text-blue">E</span>
                <span className="border-text-blue">R</span>
                <span className="border-text-blue">S</span>
                <span className="border-text-blue">O</span>
                <span className="border-text-blue">N</span>
                <span className="border-text-blue">A</span>
                <span className="border-text-blue">N</span>
                <span className="border-text-blue">E</span>
                <span className="border-text-blue">T</span>
              </h1>
              {/* Tagline */}
              <p className="text-lg md:text-xl mb-8 text-white">
                <span className="text-blue-500">Express</span>{' '}
                <span className="text-pink-500">yourself,</span>{' '}
                <span className="text-blue-500">Post your Personality</span>
              </p>
              {/* Text */}
              <div className="text-sm text-white max-w-md mx-auto mb-6">
                PersonaNet allows users to express themselves by creating digital personas based on a simple, 10-question decision-making inventory. These personas are then used for conversation and affinity matching within the network.
              </div>
              {/* Feature Icons */}
              <div className="flex justify-center space-x-8 mb-8">
                {/* Example Feature Icons - Replace with your own */}
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="bg-gray-300 w-12 h-12 rounded-full mb-2"></div>
                  {/* Description */}
                  <p className="text-gray-300 text-sm">Feature 1</p>
                </div>
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="bg-gray-300 w-12 h-12 rounded-full mb-2"></div>
                  {/* Description */}
                  <p className="text-gray-300 text-sm">Feature 2</p>
                </div>
                {/* Add more feature icons */}
              </div>
              {/* Join Now Button */}
              <button
                className="bg-pink-500 text-white px-20 py-3 rounded-full font-semibold border-white border-2 hover:bg-blue-500 transition duration-300"
              >
                Join Now
              </button>
            </div>
            {/* End of Content */}
          </div>
          {/* End of Border */}
        </div>
        {/* Bottom part of phone */}
        <div className="bg-gray-400 w-4 h-1 rounded-full mx-auto mt-1" style={{ borderRadius: '50%', background: 'linear-gradient(to right, #00FFFF, #8A2BE2, #D3D3D3)' }}></div>
      </div>
      {/* End of Mobile Device Frame */}
    </section>
  );
};

export default HeroSection