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
import Twitch from "./../public/assets/projects/Twitch.jpeg"
import twitch from "./../public/assets/projects/twitch.jpg"

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
                    <ProjectItem
                        backgroundImage={twitch}
                        title="Twitch Clone"
                        Tech="Next Js"
                        projectUrl="/Twitch"/>
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

export default Projects