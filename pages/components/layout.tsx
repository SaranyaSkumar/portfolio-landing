// components/Layout.tsx
import React, { ReactNode } from 'react'; // Import React and ReactNode
import Image from 'next/image'; // Import next/image
import backgroundImage from '../assets/main.gif'; // Adjust path as needed

interface LayoutProps {
  children: ReactNode; // Define children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full-Page Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} // Use Image component for optimized loading
          alt="Background" // Provide an alt text for accessibility
          layout="fill" // Fill the parent div
          objectFit="cover" // Cover the entire area
          className="z-[-1]" // Send the background behind other content
        />
      </div>
      
      {/* Main Glassy Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md" />
      
      {/* Content Section */}
      <div className="relative h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
