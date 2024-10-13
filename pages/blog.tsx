// pages/blog.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image for optimized images
import Layout from './components/layout';
import blog1 from './assets/blog1.jpeg';
import blog2 from './assets/5.jpeg';

const Blog = () => {
    // Sample blog data
    const blogs = [
        {
            id: 1,
            title: 'Why Do Some Videos Get More Attention Than Others? The Mystery of LinkedIn',
            excerpt: '13 October 2024',
            image: blog1, // Replace with actual paths
            link: '/blog/1', // Change link as needed
        },
        {
            id: 2,
            title: 'Why Your Work Environment Really Matters for Productivity',
            excerpt: '13 October 2024',
            image: blog2, // Replace with actual paths
            link: '/blog/2', // Change link as needed
        },
    ];

    return (
        <Layout>
            <div className="container mx-auto my-12 px-4 pt-12">
                <h2 className="text-3xl font-bold text-center mb-20 mx-4">Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 h-[500px]"> {/* Set height to 300px */}
                            <Link href={blog.link}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={500}
                                    height={400} // Set height for the image to 300px
                                    className="object-cover w-full h-[400px]" // Adjust image height
                                />
                                <div className="p-4 bg-white h-[100px]"> {/* Set height for the content area to 100px */}
                                    <i className="text-sm text-gray-700">{blog.excerpt}</i>
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
