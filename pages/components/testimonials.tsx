// components/Testimonials.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import next/image
import { IoIosArrowForward } from 'react-icons/io'; // Import right arrow icon
import Sia from '../assets/sia.jpeg'; // Your photo
import john from '../assets/john.png'; // Testimonial photo
import jane from '../assets/jane.png'; // Testimonial photo

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Jane Doe',
            position: 'CEO at Company A',
            feedback: 'Sijah transformed our sales approach, leading us to an unprecedented 30% revenue growth in just three months!',
            image: jane, // Add the path to the image
        },
        {
            id: 2,
            name: 'John Smith',
            position: 'Marketing Head at Company B',
            feedback: 'The partnership with Sijah was a game-changer. Their insights and strategies boosted our lead generation like never before.',
            image: john, // Add the path to the image
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // Adjust loading time as needed

        return () => clearTimeout(timer);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto my-12 px-4 pt-12 pb-40">
            <h2 className="text-3xl font-bold text-center mb-8 pt-20 pb-20">Cheers from My Network 🎉</h2>
            <div className={`relative flex justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                {/* Your Image on the Left */}
                <div className="w-1/2 flex justify-center">
                    <Image
                        src={Sia} // Your photo
                        alt="Your photo"
                        width={800} // Adjusted width for better balance
                        height={550} // Adjusted height for better balance
                        className="rounded-full object-cover"
                    />
                </div>

                {/* Testimonial Box on the Right */}
                <div className="w-1/2 flex items-center justify-center ml-4 "> {/* Added margin for spacing */}
                    <div className="bg-blue-500 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-md transition-opacity duration-500 transform relative">
                        <div className="flex items-center mb-4">
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={`${testimonials[currentIndex].name} photo`}
                                width={60} // Uniform width for testimonial images
                                height={60} // Uniform height for testimonial images
                                className="rounded-full object-cover border-2 border-blue-500 " // Uniform border for clarity
                            />
                            <div className="ml-4"> {/* Add margin left for text to avoid overlapping with image */}
                                <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
                                <p className="text-sm text-gray-700">{testimonials[currentIndex].position}</p>
                            </div>
                        </div>
                        <p className="text-md text-gray-700">{testimonials[currentIndex].feedback}</p>
                    </div>
                </div>

                {/* Central Navigation Arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <IoIosArrowForward
                        onClick={nextTestimonial}
                        className="text-4xl text-blue-500 cursor-pointer"
                        aria-label="Next testimonial"
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
