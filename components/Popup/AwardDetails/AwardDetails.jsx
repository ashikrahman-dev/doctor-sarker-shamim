"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const awardsData = [
    {
        id: 1,
        awardImg: "/images/awards-img-1.svg",
        awardName: "BLIND DATING WITH FILLERS",
        awardDate: "2019",
    },
    {
        id: 2,
        awardImg: "/images/awards-img-2.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2012",
    },
    {
        id: 3,
        awardImg: "/images/awards-img-3.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2011/2012",
    },
    {
        id: 4,
        awardImg: "/images/awards-img-4.svg",
        awardName: "BUSINESS AWARD",
        awardDate: "2009/2010",
    },
    {
        id: 5,
        awardImg: "/images/awards-img-5.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2009/2010",
    },
    {
        id: 6,
        awardImg: "/images/awards-img-6.svg",
        awardName: "SPECIAL AWARD",
        awardDate: "2008",
    },
];

// AwardDetails Component
export default function AwardDetails({ isOpen, onClose, award }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose} // Close when clicking backdrop
                >
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl w-[90%] max-w-[946px] p-12 relative max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-4 -right-4 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-200 z-10"
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
                                    fill="currentColor"
                                />
                            </svg>
                        </button>

                        <div className="text-center">

                            {/* Gallery */}
                            <h3 className="text-xl font-anton text-light-foreground mb-4">
                                Award Gallery
                            </h3>
                            <div className="grid grid-cols-4 gap-4 md:gap-6">
                                <Image
                                    src="/images/social-feed-img-3.jpg"
                                    alt="award image"
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                                <Image
                                    src="/images/social-feed-img-4.jpg"
                                    alt="award image"
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                                <Image
                                    src="/images/social-feed-img-2.jpg"
                                    alt="award image"
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                                <Image
                                    src="/images/social-feed-img-1.jpg"
                                    alt="award image"
                                    width={500}
                                    height={500}
                                    className="w-full h-full rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
