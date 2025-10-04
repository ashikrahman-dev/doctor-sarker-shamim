"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const mobileMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Doctors", link: "/doctors" },
    { id: 4, name: "Contact", link: "/contact" },
];

// Parent animation
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

// Child animation
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 },
    },
};

export default function MobileMenuPopup({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[20] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white/45 backdrop-blur-2xl rounded-lg sm:rounded-2xl md:rounded-3xl w-[90%] max-w-[680px] p-8 sm:p-12 md:p-20 relative"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-8 md:-top-0 right-0 md:-right-8 text-gray-500 hover:text-black cursor-pointer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5859 12.0001L2.79297 4.20718L4.20718 2.79297L12.0001 10.5858L19.793 2.79297L21.2072 4.20718L13.4143 12.0001L21.2072 19.7929L19.793 21.2072L12.0001 13.4143L4.20718 21.2072L2.79297 19.7929L10.5859 12.0001Z"
                                    className="fill-primary-main"
                                />
                            </svg>
                        </button>

                        {/* Menu Items */}
                        <motion.div
                            className="text-start"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            <div className="flex flex-col gap-2 sm:gap-6 md:gap-8">
                                {mobileMenu?.map((menu) => (
                                    <motion.div
                                        key={menu?.id}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={menu?.link}
                                            onClick={onClose} // ✅ Close modal on menu click
                                            className="group relative text-2xl sm:text-3xl md:text-4xl font-black uppercase font-albert inline-block overflow-hidden"
                                        >
                                            {/* Reveal Text Animation */}
                                            <span className="block relative">
                                                <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-500">
                                                    {menu?.name}
                                                </span>
                                                <span className="absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-primary-main">
                                                    {menu?.name}
                                                </span>
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
