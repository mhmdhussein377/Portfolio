import React from "react";
import Cover from "./../public/assets/projects/property.jpg";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri";
import Image from "next/image";

const PropertyFinder = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10"/>
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={Cover}
                    alt="/"/>
                <div
                    className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Property Finder</h2>
                    <h3>React JS / Tailwind</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 md:col-span-3 lg:col-span-4 relative">
                    <p className="text-[#5651e5]">Project</p>
                    <h2 className="py-2">Overview</h2>
                    <p>
                        The property finder UI project is designed to provide an intuitive and visually
                        appealing interface for finding properties, with a focus on ease of use and
                        accessibility. The use of React and Tailwind CSS allows for a highly
                        customizable and responsive user interface that can be adapted to meet the needs
                        of a variety of users. The addition of React Router DOM enables a smooth
                        navigation experience for users throughout the website.
                    </p>
                    <div className="mt-4">
                        <button className="uppercase px-8 py-2 mr-8">
                            <a
                                href="https://mhmdhussein-property-finder.netlify.app"
                                rel="noreferrer"
                                target="_blank">
                                Demo
                            </a>
                        </button>
                        <button className="uppercase px-8 py-2">
                            <a
                                href="https://github.com/mhmdhussein377/Real-Estate-Website-V2"
                                rel="noreferrer"
                                target="_blank">
                                Code
                            </a>
                        </button>
                    </div>
                </div>
                <div
                    className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl rounded-xl shadow-gray-400 p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                Tailwind
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default PropertyFinder;
