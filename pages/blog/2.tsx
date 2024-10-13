// pages/blog/[id].js
import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import blogImage1 from '../assets/5.jpeg'; // Adjust the image path

const BlogPost = () => {
    return (
        <Layout>
            <div className="mx-auto my-12 px-4 pt-12" style={{ width: '70%' }}>
                {/* Blog Content with Glassy Effect */}
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg">
                    {/* Blog Title */}
                    <h1 className="text-5xl font-bold mb-5 text-center">
                        Why Your Work Environment Really Matters for Productivity
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
                                There’s a saying, “Work environment matters for productivity,” and I couldn’t agree more.
                            </p>

                            <p className="mb-4">
                                Even though we could work completely remotely, we choose to work from a premium co-working space called WeWork India.
                            </p>
                            <p className="mb-4">
                                Before you ask, yes, the rent is high, and it takes up a big part of my budget. But we believe it’s worth it because we get things done:
                            </p>
                            <ul className="list-disc pl-5 mb-6">
                                <li>Faster</li>
                                <li>Better</li>
                                <li>More efficiently</li>
                            </ul>
                            <p className="mb-6">
                                Right now, at this stage of our growth, having this space feels necessary. It helps us focus and work more effectively. While this might change in the future, at the moment, it’s what we need to stay on track.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4">How Do I Choose the Right Workspace?</h2>
                            <p className="mb-4">
                                I always look at 3 important things when picking a workspace. This approach has made a huge difference for me:
                            </p>
                            <ul className="list-disc pl-5 mb-6">
                                <li><b>Is the environment inspiring?</b> If not, it’s worth reconsidering.</li>
                                <li><b>Does it boost productivity?</b> If not, think again.</li>
                                <li><b>Is there 24/7 access?</b> If not, it might not be the right fit.</li>
                            </ul>
                            <p className="mb-6">
                                These three things—energy, efficiency, and flexibility—are what really matter to me.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4">Value Over Cost</h2>
                            <p className="mb-4">
                                In simple terms:
                            </p>
                            <ul className="list-disc pl-5 mb-6">
                                <li>Don’t just focus on the cost, focus on the value.</li>
                                <li>Aim to be more productive, not just busier.</li>
                                <li>It’s not about the price tag, but about the experience.</li>
                            </ul>
                            <p className="mb-6">
                                Your workspace affects how well you work and can have a big impact on your productivity. It’s something that really matters.
                            </p>

                            <p className="font-semibold">Cheers to everyone out there working hard!</p>
                        </div>


                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;
