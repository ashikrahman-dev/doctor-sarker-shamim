"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppointmentPopup from "../Popup/AppointmentPopup/AppointmentPopup";

const headerMenuLeft = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Events", link: "/events" },
];

const headerMenuRight = [
    { id: 1, name: "Gallery", link: "/gallery" },
    { id: 2, name: "News", link: "/news" },
    { id: 3, name: "Contact", link: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 800);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`mt-3 md:mt-4 lg:mt-6 px-4 md:px-6 lg:px-10 xl:px-5 2xl:px-5 z-50 transition-all duration-300 ${
                    isSticky
                        ? "fixed top-0 left-0 right-0 mt-0 animate-in slide-in-from-top-full duration-300 ease-out"
                        : "absolute top-0 left-0 right-0"
                }`}
            >
                <div
                    className={`px-3 md:px-4 lg:px-5.5  rounded-full flex items-center justify-between gap-6 h-18 lg:h-[102px] border border-white/20 transition-all duration-300 ${
                        isSticky
                            ? "bg-white/60 backdrop-blur-md"
                            : "bg-white/100 backdrop-blur-md "
                    }`}
                >
                    {/* WhatsApp buttons (Left) */}
                    <div className="items-center hidden sm:flex">
                        <Link
                            href="/"
                            className="bg-[#25D366] px-5 lg:px-7.5 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold font-plus-jakarta-sans flex gap-3 justify-center text-white min-w-auto lg:min-w-64 transition-colors duration-300 hover:bg-[#1fbe59]"
                        >
                            <Image
                                src="/images/whatsapp-icon.svg"
                                width={24}
                                height={24}
                                alt="whatsapp"
                                className="w-5 lg:w-6 h-5 lg:h-6"
                            />
                            <span>Whatsapp</span>
                        </Link>
                    </div>

                    {/* Menu & Logo */}
                    <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
                        {/* Left Menu */}
                        <nav className="lg:flex items-center justify-between hidden">
                            <ul className="flex items-center gap-1 xl:gap-2 2xl:gap-5">
                                {headerMenuLeft.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className="text-sm flex justify-center py-8 xl:py-10 px-2 2xl:px-3 font-medium text-dark transition-colors hover:bg-primary-main duration-200 relative before:absolute before:content-[''] before:bottom-0 before:w-full before:h-0 before:bg-light-secondary before:transition-all before:duration-100 hover:before:h-0.5 after:absolute after:content-[''] after:h-0 after:w-full after:left-0 after:top-full after:bg-[linear-gradient(0deg,rgba(233,144,16,0.20)_0%,rgba(233,144,16,0)_100%)] after:transition-all after:duration-300 hover:after:h-full hover:after:top-0 overflow-hidden"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                width={100}
                                height={100}
                                alt="logo"
                                className="max-w-10 lg:max-w-[150px] w-full ml-2.5 sm:ml-0"
                            />
                        </Link>

                        {/* Right Menu */}
                        <nav className="lg:flex items-center justify-between hidden">
                            <ul className="flex items-center gap-1 xl:gap-2 2xl:gap-5">
                                {headerMenuRight.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className="text-sm flex justify-center py-8 xl:py-10 px-2 2xl:px-3 font-medium text-dark transition-colors hover:bg-primary-main duration-200 relative before:absolute before:content-[''] before:bottom-0 before:w-full before:h-0 before:bg-light-secondary before:transition-all before:duration-100 hover:before:h-0.5 after:absolute after:content-[''] after:h-0 after:w-full after:left-0 after:top-full after:bg-[linear-gradient(0deg,rgba(233,144,16,0.20)_0%,rgba(233,144,16,0)_100%)] after:transition-all after:duration-300 hover:after:h-full hover:after:top-0 overflow-hidden"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* CTA buttons (Right) */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-light-accent rounded-full py-3 lg:py-4 px-5 lg:px-8 text-light-foreground text-sm lg:text-base font-semibold leading-[1.2] lg:h-[58px] inline-flex gap-2 items-center group transition-colors duration-300 hover:bg-accent-bg cursor-pointer"
                        >
                            <span className="block sm:hidden">Appointment</span>
                            <span className="hidden sm:block">Make An Appointment</span>
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 lg:w-auto h-4 lg:h-auto"
                            >
                                <path
                                    d="M13.976 9.16609L9.50601 4.69609L10.6845 3.51758L17.1663 9.99943L10.6845 16.4812L9.50601 15.3027L13.976 10.8328H3.83301V9.16609H13.976Z"
                                    fill="#060C22"
                                    className="transition-all duration-200 group-hover:fill-light-foreground"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Popup Modal */}
            <AppointmentPopup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
