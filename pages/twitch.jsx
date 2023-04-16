import React from 'react'
import TwitchImg from "./../public/assets/projects/twitch.jpg"
import Image from "next/image"
import Link from "next/link"
import {RiRadioButtonFill} from "react-icons/ri"

const Twitch = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div
                    className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                    <Image
                        src={TwitchImg}
                        alt="/"
                        layout="fill"
                        objectFit="cover"
                        className="absolute z-1 opacity-30"/>
                    <div
                        className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%]  text-white translate-x-[-50%] translate-y-[-50%] px-4 z-30">
                        <h2 className="py-2">Twitch UI</h2>
                        <h3>Next JS / Tailwind</h3>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 md:col-span-3 lg:col-span-4 relative">
                    <p className="text-[#5651e5]">Twitch Clone</p>
                    <h2 className="py-2">Overview</h2>
                    <p>
                        The goal of this project is to create a responsive clone of the Twitch UI using
                        Next.js and Tailwind CSS. The clone will mimic the design and layout of the
                        Twitch website
                    </p>
                    <div className="mt-4">
                        <button className="uppercase px-8 py-2 mr-8">
                            <a
                                href="https://mhmdhussein377-twitch-clone.netlify.app"
                                target="_blank"
                                rel="noreferrer">
                                Demo
                            </a>
                        </button>
                        <button className="uppercase px-8 py-2">
                            <a
                                href="https://github.com/mhmdhussein377/Twitch-Clone"
                                target="_blank"
                                rel="noreferrer">
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
                                Next JS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                Tailwind CSS
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
}

export default Twitch