import React from 'react'
import Link from "next/link"
import img from "./../public/assets/about.jpg"
import Image from 'next/image';

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I{"'"}m a software engineer with expertise in web development. I work with
                        various programming languages, databases, and frameworks. I{"'"}ve completed
                        relevant training and have a strong educational background. I{"'"}m ready to make a
                        positive impact in web development.
                    </p>
                    <p className="py-2 text-gray-600">
                        Many projects were developed by me utilizing a variety of technologies and tools. My discipline, adaptability and effective time management skills help me stay focused and do well in fast-changing workplaces.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div
                    className="w-full h-full shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={img} alt="/" className="w-full h-full object-cover rounded-xl"/>
                </div>
            </div>
        </div>
    );
}

export default About