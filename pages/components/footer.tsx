// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative backdrop-blur-md text-white pt-10 mt-40">
      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} /> {/* Purple 400 */}
              <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} /> {/* Blue 500 */}
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)" // Use the gradient defined above
            d="M0,128L30,144C60,160,120,192,180,213.3C240,235,300,245,360,234.7C420,224,480,192,540,181.3C600,171,660,181,720,186.7C780,192,840,192,900,170.7C960,149,1020,107,1080,85.3C1140,64,1200,64,1260,74.7C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto text-center relative z-10 py-6">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Sijah Sadique. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
        {/* Uncomment this if you have a ContactButton component */}
        {/* <ContactButton /> */}
      </div>
    </footer>
  );
};

export default Footer;
