import React from "react";
import CryptoImg from "./../public/assets/projects/crypto.jpg";
import Link from "next/link";
import {RiRadioButtonFill} from "react-icons/ri";
import Image from "next/image";
import Cover from "./../public/assets/projects/FoodDelivery.jpeg"

const FoodDelivery = () => {
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
                    <h2 className="py-2">Food Delivery App</h2>
                    <h3>React JS / Redux</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 md:col-span-3 lg:col-span-4 relative">
                    <p className="text-[#5651e5]">Project</p>
                    <h2 className="py-2">Overview</h2>
                    <p>
                        The project is a food delivery website using React and Redux Toolkit, it is
                        designed to allow users to order food online. The website likely includes
                        features such as a search function to allow users to find specific food items or
                        restaurants, a shopping cart to store their chosen items, and a checkout process
                        to complete their order. Overall, the project is an effective use of modern web
                        development tools and technologies, providing users with a fast, responsive, and
                        user-friendly food delivery website that can be accessed from a variety of
                        devices.
                    </p>
                    <div className="mt-4">
                        <button className="uppercase px-8 py-2 mr-8">
                            <a
                                href="https://mhmdhussein-food-delivery-app.netlify.app/"
                                rel="noreferrer"
                                target="_blank">
                                Demo
                            </a>
                        </button>
                        <button className="uppercase px-8 py-2">
                            <a
                                href="https://github.com/mhmdhussein377/Reactjs-Food-Delivery-App"
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
                                Redux toolkit
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                Reactstrap
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

export default FoodDelivery;
