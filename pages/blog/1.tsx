// pages/blog/[id].js
import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import blogImage1 from '../assets/blog1.jpeg'; // Adjust the image path

const BlogPost = () => {
    return (
        <Layout>
            <div className="mx-auto my-12 px-4 pt-12" style={{ width: '70%' }}>
                {/* Blog Content with Glassy Effect */}
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg">
                    {/* Blog Title */}
                    <h1 className="text-5xl font-bold mb-5 text-center">
                        Why Do Some Videos Get More Attention Than Others? The Mystery of LinkedIn
                    </h1>
                    <p className="text-gray-600 text-center mb-10 ">October 13, 2024</p>


                    {/* Main Blog Image */}
                    <div className="mb-8 flex justify-center">
                        <Image
                            src={blogImage1}
                            alt="Main Blog Image"
                            width={600} // Reduced width for the image
                            height={200}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="prose lg:prose-xl max-w-none">
                        <div className="container mx-auto my-12 px-4 pt-12 max-w-4xl">
                            <p className="mb-4">
                                Have you ever shared something on LinkedIn that you thought would get a lot of attention, only to see it didn’t do as well as you hoped? You’re not the only one.
                            </p>

                            <p className="mb-4">
                                Here’s what happened to me recently:
                            </p>
                            <ul className="list-disc pl-5 mb-6">
                                <li>Post 1: 37 likes but got 62,088 impressions.</li>
                                <li>Post 2: 129 likes but only 24,674 impressions.</li>
                            </ul>

                            <p className="mb-4">
                                It almost feels like LinkedIn has a mind of its own sometimes, doesn’t it? 😅
                            </p>

                            <p className="mb-6">
                                This made me think about how unpredictable video performance can be on platforms like LinkedIn. But you know what? Even with different results, I’ve made the choice to keep going.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4">Keep Going, Even When It’s Not Perfect</h2>
                            <p className="mb-4">
                                Some videos do really well, and others don’t. And that’s okay. The biggest lesson I’ve learned is to stick with the process instead of worrying about perfect results.
                            </p>
                            <p className="mb-6">
                                Because here’s the truth: not every post will do great, but that doesn’t mean you should stop trying.
                            </p>

                            <h3 className="text-xl font-semibold mb-2">Here’s why I keep going:</h3>
                            <ul className="list-disc pl-5 mb-6">
                                <li>I believe in learning from every post. No matter if a post gets 37 likes or 129 likes, each one teaches me something about what works and what doesn’t.</li>
                                <li>I believe in overcoming challenges. Low engagement? That’s just a small hurdle. I’m in it for the long game.</li>
                                <li>I believe in sticking with it. The most successful people didn’t stop after a few setbacks. They stayed with it, learned from it, and kept moving forward.</li>
                            </ul>

                            <h2 className="text-2xl font-semibold mt-10 mb-4">Enjoying the Journey</h2>
                            <p className="mb-4">
                                Today, I’m fine-tuning my approach and staying committed. Yes, some videos work great and others don’t. But I genuinely enjoy the process of trying new things and growing through it all.
                            </p>
                            <p className="mb-6">
                                At the end of the day, social media is more than just likes and comments—it’s about consistently showing up, sharing something meaningful, and staying true to yourself.
                            </p>

                            <h3 className="text-xl font-semibold mb-4">3 Lessons I’ve Learned From LinkedIn:</h3>
                            <ul className="list-decimal pl-5 mb-6">
                                <li><b>Stick to what you believe in.</b> Don’t let the numbers distract you. Focus on sharing valuable content and being yourself.</li>
                                <li><b>Learn from everything.</b> Even when a post doesn’t perform well, there’s always something to learn.</li>
                                <li><b>Be consistent.</b> The key to success is simply showing up regularly, no matter what.</li>
                            </ul>

                            <p>
                                So, if you’re reading this, remember to keep going, even when the results aren’t what you expect. Every effort is part of building something bigger, even if it’s not obvious right away.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;
