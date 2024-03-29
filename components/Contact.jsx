import React, {useRef} from 'react'
import ContactImg from "./../public/assets/contact.jpg"
import Image from "next/image"
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from "next/link"
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_sgsuc6v", "template_89o2vdr", form.current, "LO3yPiZNk7anJfZne")
            .then((result) => {
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-4">
                    {/* Left */}
                    <div
                        className="col-span-3 lg:col-span-2 w-full h-full  shadow-xl shadow-gray-400 rounded-xl p-4 ">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image
                                    src={ContactImg}
                                    alt="/"
                                    className="rounded-xl hover:scale-105 ease-in duration-300"/>
                            </div>
                            <div>
                                <h2 className="py-2">Mohammad Hussein</h2>
                                <p>Full-Stack Web Developer</p>
                                <p className="py-4">
                                    I am availbale for freelance or full-time positions. Contact me and let{"'"}s talk.
                                </p>
                            </div>
                            <div>
                                <p className="pt-8">CONNECT WITH ME</p>
                                <div
                                    className="flex items-center justify-between py-2 w-full sm:w-2/3 md:w-1/2 lg:w-full">
                                    <a
                                        href="https://www.linkedin.com/in/mohammad-hussein-b6a2911b4/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaLinkedinIn/>
                                    </a>
                                    <a
                                        href="https://github.com/mhmdhussein377"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <FaGithub/>
                                    </a>
                                    <Link
                                        href="/#contact"
                                        className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail/>
                                    </Link>
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <BsFillPersonLinesFill/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        className="col-span-3 w-full h-auto shadow-xl rounded-xl shaodw-gray-400 lg:p-4">
                        <div className="p-4">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Name</label>
                                    <input
                                        name='from_name'
                                        type="text"
                                        className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input
                                        name='from_email'
                                        type="email"
                                        className="border-2 rounded-lg p-3 flex border-gray-300"/>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea
                                        name='message'
                                        className="border-2 rounded-lg p-2 border-gray-300"
                                        rows="10"></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    <Link href="/">
                        <div
                            className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={25} className="text-[#5651e5]"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact