// components/Header.js
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-purple-400 to-blue-500 text-white bg-opacity-30 backdrop-blur-md text-white py-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sijah Sadique</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Home {/* No <a> tag here */}
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Blog {/* No <a> tag here */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
