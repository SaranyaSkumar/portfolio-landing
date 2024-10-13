// components/Gallery.js
import React from 'react';
import Image from 'next/image'; // Import next/image
import one from '../assets/1.jpeg'; // Image 1
import two from '../assets/2.jpeg'; // Image 2
import three from '../assets/3.jpeg'; // Image 3
import four from '../assets/4.jpeg'; // Image 4
import five from '../assets/5.jpeg'; // Image 5
import six from '../assets/6.jpeg'; // Image 6

const Gallery = () => {
  const images = [
    one, two, three, four, five, six
  ];

  return (
    <div className="container mx-auto my-10 px-4 pb-10 mb-30">
      <h2 className="text-3xl font-bold text-center mb-20">A Glimpse into My World 📸</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg h-80"> {/* Increased height */}
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`} 
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container without stretching
              className="transition-transform duration-500 transform hover:scale-105" // Hover effect
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
