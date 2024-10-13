// components/Appointment.js
import React, { useEffect, useState } from 'react';

const Appointment = () => {
  const [isVisible, setIsVisible] = useState(false);

  const bookingTypes = [
    {
      id: 1,
      title: '1:1 Startup Advisory',
      price: '$150 / hour',
      icon: '🚀',
      description: 'Kickstart your business journey with personalized advice tailored to your startup needs.',
    },
    {
      id: 2,
      title: '1:1 Agency Growth Advisory',
      price: '₹10,000 / hour',
      icon: '📈',
      description: 'Unlock the potential of your agency with growth strategies that deliver results.',
    },
    {
      id: 3,
      title: '1:1 Marketing & Growth Consulting',
      price: '$150 / hour',
      icon: '📊',
      description: 'Discover innovative marketing solutions designed to elevate your business.',
    },
    {
      id: 4,
      title: '1:1 Business Strategy Session',
      price: '$200 / hour',
      icon: '💼',
      description: 'Craft a winning strategy with expert insights that align with your business goals.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto my-12 px-4 pt-20 mb-10 text-center">
      <h2 className="text-3xl font-bold mb-10 pb-6" style={{ color: 'rgb(255, 255, 255 / var(--tw-text-opacity))' }}>
        How Can I Support Your Growth Journey? 
      </h2>
      <div className='flex justify-center'>
        <div className='w-3/4'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {bookingTypes.map((booking) => (
              <div
                key={booking.id}
                className={`bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-md transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105 hover:shadow-lg duration-300 h-[350px] flex flex-col`}
              >
                <div className="text-6xl text-center mb-4"> {/* Increased icon size */}
                  {booking.icon}
                </div>
                <h3 className="text-xl font-semibold text-center">{booking.title}</h3>
                <p className="text-lg text-center my-2">{booking.price}</p>
                <p className="text-center text-sm text-gray-700 mb-2">{booking.description}</p>
                <div className="mt-auto"> {/* Flexbox helps to push the button to the bottom */}
                  <button className="w-full bg-gradient-to-br from-purple-400 to-blue-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
