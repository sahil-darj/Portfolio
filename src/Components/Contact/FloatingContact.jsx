import React, { useState } from "react";
import { FiMail, FiX, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import Contact from "./Contact";

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-8 right-8 z-[100]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(130,69,236,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    title="Contact Me"
                >
                    <FiMail size={28} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
                    </span>
                </button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#050414] w-full max-w-lg rounded-3xl border border-purple-500/30 shadow-[0_0_40px_rgba(130,69,236,0.2)] overflow-hidden relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <FiX size={24} />
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                            <p className="text-gray-400 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>

                            {/* Contact Details */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <a href="mailto:darjisahil46.@gmail.com" className="flex items-center gap-2 bg-[#131025] px-4 py-2 rounded-xl text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all">
                                    <FiMail className="text-purple-500" />
                                    <span>Email</span>
                                </a>
                                <a href="https://www.linkedin.com/in/sahil-darji-30a609313/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#131025] px-4 py-2 rounded-xl text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all">
                                    <FiLinkedin className="text-purple-500" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://github.com/sahil-darj/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#131025] px-4 py-2 rounded-xl text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all">
                                    <FiGithub className="text-purple-500" />
                                    <span>GitHub</span>
                                </a>
                            </div>

                            {/* Embed Contact Form */}
                            <div className="contact-modal-form">
                                <Contact isModal={true} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingContact;
