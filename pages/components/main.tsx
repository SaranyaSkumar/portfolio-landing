import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/main.gif'; // Adjust path as needed
import { Button } from '@nextui-org/react';

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-center h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Additional Glass Box for Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
            className={`bg-gradient-to-br from-purple-400 to-blue-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Gradient background with hover effects
            style={{ width: '50%' }} // Fixed width of 50%
        >
          <h1 className="font-sans text-5xl text-white mb-4">
            Hey You!
          </h1>
          <p className="text-white text-5xl">
            I'm Sijah Sadique
          </p>
          
          <p className="text-white text-lg pt-4">
            B2B growth specialist with a knack for driving leads, revenue, and partnerships that stick. As a co-founder and operational strategist, I’ve helped generate over 15K leads and $8M+ in revenue across industries.
          </p>

          {/* Button with glassy effect and rounded corners */}
          <div className="mt-6">
            <Button 
              className="transition-transform duration-300 transform hover:scale-105 bg-opacity-50 backdrop-blur-md text-blue-500 py-3 px-6 rounded-lg focus:outline-none" // Added focus:outline-none to remove the border
              style={{ backgroundColor: '#FFB04D' }} // Semi-transparent background color
            >
              Let’s Talk Growth!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
