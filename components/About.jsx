import React from 'react'
import Link from "next/link"

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
                        I{"'"}m a motivated and dedicated self-taught front-end developer with a passion for
                        creating responsive websites that provide a seamless user experience on all
                        devices. My focuy on developing my skills and staying up-to-date with the latest
                        technologies in the field has enabled me to build dynamic and visually appealing
                        websites that meet the needs.
                    </p>
                    <p className="py-2 text-gray-600">
                        My determination and drive have helped me achieve my goals as a front-end
                        developer, and I continue to work hard to improve and expand my skills.In
                        addition to my technical skills, I am a quick learner, and you enjoy the process
                        of figuring out how things work and finding solutions to problems.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div
                    className="w-full h-full shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img
                        src="/assets/about.jpg"
                        alt="/"
                        className="w-full h-full object-cover rounded-xl"/>
                </div>
            </div>
        </div>
    );
}

export default About