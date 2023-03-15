import React from "react";
import CryptoImg from "./../public/assets/projects/crypto.jpg";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri";
import Image from "next/image";

const ModernStore = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div
                    className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                    <Image
                        src={CryptoImg}
                        alt="/"
                        layout="fill"
                        objectFit="cover"
                        className="absolute z-1 opacity-30"/>
                    <div
                        className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]  text-white translate-x-[-50%] translate-y-[-50%] px-4 z-30">
                        <h2 className="py-2">Modern Store</h2>
                        <h3>React JS / Tailwind</h3>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 md:col-span-3 lg:col-span-4 relative">
                    <p className="text-[#5651e5]">Project</p>
                    <h2 className="py-2">Overview</h2>
                    <p>
                        The project is a web application built using React, Tailwind CSS, and Redux
                        Toolkit. Its purpose is to provide an online shopping platform for customers,
                        with a modern and user-friendly interface.
                        It allows customers to browse and purchase products, with features such
                        as a shopping cart and checkout.
                        <br></br><br></br> Overall, the modern store project is a complex
                        web application that requires expertise in several technologies and disciplines,
                        including front-end development with React and Tailwind CSS, state management
                        with Redux Toolkit.
                    </p>
                    <div className="mt-4">
                        <button className="uppercase px-8 py-2 mr-8">Demo</button>
                        <button className="uppercase px-8 py-2">Code</button>
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
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                Redux toolkit
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

export default ModernStore;
