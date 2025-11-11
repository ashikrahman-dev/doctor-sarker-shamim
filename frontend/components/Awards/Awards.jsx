"use client";

import Image from "next/image";
import { useState } from "react";
import AwardDetails from "../Popup/AwardDetails/AwardDetails";

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

// Main Awards Component
export default function Awards() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedAward, setSelectedAward] = useState(null);

    const handleAwardClick = (award) => {
        setSelectedAward(award);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setSelectedAward(null);
    };

    return (
        <>
            <div className="py-12 md:py-16 xl:py-20 2xl:py-24 overflow-hidden bg-accent-bg">
                <div className="container">
                    {/* Section Heading */}
                    <div className="text-center max-w-[720px] 2xl:max-w-[854px] mx-auto">
                        <div className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton leading-[1.3] mb-4">
                            My awards
                        </div>
                    </div>
                    {/* Awards Card */}
                    <div className="pt-6 lg:pt-8 xl:pt-10 2xl:pt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                        {awardsData?.map((award) => (
                            <div
                                key={award?.id}
                                onClick={() => handleAwardClick(award)}
                                className="p-4 bg-white rounded-2xl flex flex-col items-center h-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                            >
                                <Image
                                    src={award?.awardImg}
                                    alt="award image"
                                    width={70}
                                    height={70}
                                    className="w-[70px] h-[70px] rounded-lg group-hover:scale-110 transition-transform duration-200"
                                />
                                <h3 className="font-normal text-lg text-light-foreground font-anton py-3 text-center">
                                    {award?.awardName}
                                </h3>
                                <p className="font-normal text-sm text-light-secondary flex items-center gap-2">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.50033 0.833984V2.50065H12.5003V0.833984H14.167V2.50065H17.5003C17.9606 2.50065 18.3337 2.87375 18.3337 3.33398V16.6673C18.3337 17.1276 17.9606 17.5007 17.5003 17.5007H2.50033C2.04009 17.5007 1.66699 17.1276 1.66699 16.6673V3.33398C1.66699 2.87375 2.04009 2.50065 2.50033 2.50065H5.83366V0.833984H7.50033ZM16.667 9.16732H3.33366V15.834H16.667V9.16732ZM5.83366 4.16732H3.33366V7.50065H16.667V4.16732H14.167V5.83398H12.5003V4.16732H7.50033V5.83398H5.83366V4.16732Z"
                                            fill="#FF6D00"
                                        />
                                    </svg>
                                    {award?.awardDate}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Award Details Popup */}
            <AwardDetails
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                award={selectedAward}
            />
        </>
    );
}
