import Image from "next/image"
import React from "react"
import PropertyImg from "./../public/assets/projects/property.jpg"
import CryptoImg from "./../public/assets/projects/crypto.jpg"
import NetflixImg from "./../public/assets/projects/netflix.jpg"
import TwitchImg from "./../public/assets/projects/twitch.jpg"
import Link from "next/link"
import ProjectItem from "./ProjectItem"

import FoodDeliveryImg from "./../public/assets/projects/Food-Delivery.jpeg"
import ModernStoreImg from "./../public/assets/projects/ModernStore.jpeg"
import RealEstate1 from "./../public/assets/projects/Real-Estate-1.jpeg"
import RealEstate2 from "./../public/assets/projects/Real-Estate-2.jpeg";
import HuluImg from "./../public/assets/projects/Hulu-Clone.jpeg"
import WeekAway from "./../public/assets/projects/Web capture_14-2-2023_21400_harmonious-semolina-a1630d.netlify.app.jpeg";

const Projects = () => {
    return (
        <div className="w-full" id="projects">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Projects
                </p>
                <h2 className="py-4">What I{"'"}ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* <ProjectItem
                        backgroundImage={HuluImg}
                        title="Hulu Clone"
                        Tech="Next JS"
                        projectUrl="/Hulu"/> */}
                    <ProjectItem
                        backgroundImage={FoodDeliveryImg}
                        title="Food Delivery App"
                        Tech="React JS"
                        projectUrl="/FoodDelivery"/>
                    <ProjectItem
                        backgroundImage={RealEstate2}
                        title="Real Estate"
                        Tech="React JS"
                        projectUrl="/RealEstate"/>
                    {/* <ProjectItem
                        backgroundImage={ModernStoreImg}
                        title="Modern Store"
                        Tech="React JS"
                        projectUrl="/ModernStore"/> */}
                    <ProjectItem
                        backgroundImage={WeekAway}
                        title="Travel Website"
                        Tech="React JS"
                        projectUrl="/Travel"/>
                    <ProjectItem
                        backgroundImage={RealEstate1}
                        title="Property Finder UI"
                        Tech="React JS"
                        projectUrl="/PropertyFinder"/>
                </div>
            </div>
        </div>
    );
}

{/* <img src="/assets/projects/netflix.jpg" alt="/" className='rounded-xl' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#5451e5] flex flex-col items-center justify-center text-white hidden rl'>
                        <h3 className='text-3xl'>Property Finder</h3>
                        <p className='py-4 text-xl'>React JS</p>
                        <button className='py-2 px-7 text-black bg-gradient-to-r from-white to-white rounded-lg'>More Info</button>
                    </div> */
}

export default Projects