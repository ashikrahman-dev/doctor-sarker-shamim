"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MobileMenuPopup from "../Popup/MobileMenuPopup/MobileMenuPopup";

const mobileMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Gallery", link: "/gallery" },
    { id: 3, name: "News", link: "/news" },
    { id: 4, name: "Contact", link: "/contact" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            <motion.div
                initial={{ y: 50, scale: 0.8, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    duration: 0.6,
                }}
                className="fixed bottom-6 sm:bottom-8 md:bottom-12 w-fit p-2 sm:p-3 min-w-fit rounded-full bg-primary-main/15 backdrop-blur-sm left-1/2 -translate-x-1/2 z-60"
            >
                {/* Mobile menu Button */}
                <div className="flex gap-2 sm:gap-3 items-center justify-center h-full w-full">
                    <div className="flex gap-1.5 sm:gap-3 items-center">
                        {mobileMenu?.map((menu) => (
                            <Link
                                href={menu?.link}
                                key={menu?.id}
                                className="group relative py-0.5 sm:py-1 px-1.5 sm:px-3 rounded-full bg-white/60 opacity-80 backdrop-blur-lg text-xs sm:text-sm font-bold uppercase transition-all duration-300 hover:bg-white hover:opacity-100 font-albert overflow-hidden"
                            >
                                <span className="block relative">
                                    <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                                        {menu?.name}
                                    </span>
                                    <span className="absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-primary-main">
                                        {menu?.name}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <motion.button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-lg cursor-pointer"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2004_2)">
                                <path
                                    d="M14 6.125H7.875V0H6.125V6.125H0V7.875H6.125V14H7.875V7.875H14V6.125Z"
                                    fill="#0C0E3A"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2004_2">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </motion.button>
                </div>
            </motion.div>

            {/* Popup Modal */}
            <MobileMenuPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </section>
    );
}
