// components/Experience.js
import Image from 'next/image'; // Import next/image
import React, { useEffect, useState } from 'react';
import enguruLogo from '../assets/enguru.png'; // Import your logos here
import atomnechoLogo from '../assets/atom_echo_logo.png'; // Add your logo path
import growthOnboardLogo from '../assets/growth_onboard.png'; // Add your logo path

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'Atomnecho',
      logo: atomnechoLogo,
      period: 'May 2024 – Oct 2024',
      location: 'Bangalore, India',
      achievements: [
        '🌟 Closed <strong>7 clients</strong> in the first month, rapidly accelerating our growth trajectory, though it led to operational challenges.',
        '🤝 Initiated verbal agreements with <strong>3 businesses</strong>, showcasing our commitment to collaboration, though I learned the importance of documented agreements.',
        '🚫 Rejected two investment offers, realizing later that meticulous <strong>financial planning</strong> is crucial for sustainable growth.',
        '🎁 Experimented with a “freemium” model, learning valuable lessons about customer segmentation and <strong>market fit</strong>.',
        '🏢 Overspent on an office space, which taught me the significance of aligning expenditures with <strong>cash flow management</strong>.',
        '🔍 Faced challenges with hiring decisions; realized the importance of swift action in <strong>performance management</strong>.',
      ],
    },
    {
      id: 2,
      title: 'Growth Onboard',
      logo: growthOnboardLogo,
      period: 'June 2023 – Apr 2024',
      location: 'Bangalore, India',
      achievements: [
        '📧 Successfully sent <strong>150K+ emails</strong>, generating over <strong>15K leads</strong>, translating to <strong>$8M</strong> in attributed revenue.',
        '🌏 Oversaw <strong>30+ client portfolios</strong> across diverse regions including the US, Singapore, India, and the UK, enhancing our international presence.',
        '🔗 Managed client LinkedIn accounts, optimizing profiles and executing targeted <strong>content strategies</strong> to maximize lead generation.',
        '📈 Orchestrated multi-channel marketing strategies, achieving a <strong>20% revenue growth</strong> for clients.',
        '🔍 Implemented analytics tools to measure campaign effectiveness, enabling <strong>real-time adjustments</strong> and improved client ROI.',
        '🛠️ Led a cross-functional team in developing tailored <strong>marketing solutions</strong>, fostering a culture of innovation and collaboration.',
      ],
    },
    {
      id: 3,
      title: 'Enguru',
      logo: enguruLogo,
      period: 'June 2022 – May 2023',
      location: 'Bangalore, India',
      achievements: [
        '📈 Drove <strong>100% growth</strong> in the Personal Classes product within just <strong>6 months</strong>, significantly boosting company revenue.',
        '💼 Took charge of sales, operations, and in-app marketing, enhancing overall <strong>efficiency</strong> and customer satisfaction.',
        '🎤 Directed operations for live classes, managing a robust team of <strong>500+ freelancers</strong> and ensuring <strong>30K+ sessions</strong> monthly.',
        '🛠️ Refined processes to save <strong>15+ hours/week</strong>, streamlining operations for international expansion.',
        '🎯 Developed new features based on user feedback, leading to a <strong>30% increase</strong> in user engagement and satisfaction.',
        '📊 Established KPIs to track team performance, ensuring alignment with company goals and driving a culture of <strong>accountability</strong>.',
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto my-12 px-4 pt-12">
      <h2 className="text-4xl font-bold text-center mb-8 pt-20 text-gradient">Epic Wins: A Career Snapshot 🚀
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`bg-gradient-to-br from-purple-400 to-blue-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100' : 'opacity-0'}`} // Gradient background with hover effects
          >
            <div className="flex justify-center mb-4 h-24"> {/* Fixed height for logo container */}
              <Image 
                src={experience.logo} 
                alt={`${experience.title} logo`} 
                width={100} // Set a uniform width
                height={100} // Set a uniform height
                className="object-contain" 
              /> {/* Logo */}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">{experience.title}</h3> {/* Increased font size for title */}
            <p className="text-md text-center mb-2">{experience.location}</p>
            <p className="text-md text-center mb-4">{experience.period}</p>
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-md transition-transform duration-300 hover:translate-x-2" dangerouslySetInnerHTML={{ __html: achievement }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
