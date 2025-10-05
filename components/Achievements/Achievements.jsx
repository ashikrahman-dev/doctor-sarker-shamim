"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const certificationData = [
    {
        id: 1,
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "FCPS (Dermatology) 2014",
        institute: "Bangladesh College of Physician and Surgeons",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "Diploma in Dermatology (Dip Derm) 2014",
        institute: "Royal College of Physician and Surgeons of Glasgow, UK",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "MCPS (Dermatology) 2009",
        institute: "Bangladesh College of Physician and Surgeons",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "AAAM Board Certification 2019",
        institute: "Board Certified Aesthetic Dermatologist (AAAM)",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "Diploma in Aesthetic Medicine 2016",
        institute: "American Academy of Aesthetic Medicine, USA",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Post Graduate Education",
        degree: "FCGP 2002",
        institute: "The College of General Practitioners of Bangladesh",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Graduation",
        degree: "MBBS 1999",
        institute: "Institute of Applied Health Sciences",
        faculty: "Faculty of Medicine, University of Chittagong",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/achievement-placeholder-img.svg",
        title: "Undergraduate Education",
        degree: "Higher Secondary School Certificate 1990",
        institute: "Govt. Hazi Muhammad Muhsin College",
    },
];

export default function Achievements() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(certificationData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = certificationData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-accent-bg overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-6 md:mb-8 xl:mb-10 2xl:mb-12 max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <div className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton leading-[1.3] mb-4">
                        Academic Qualification
                    </div>
                </div>

                {/* Certification Items with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage} // triggers animation on page change
                        initial={{ opacity: 0, x: 50 }} // start slightly right
                        animate={{ opacity: 1, x: 0 }} // slide to position
                        exit={{ opacity: 0, x: -50 }} // exit to left
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="flex flex-col gap-6"
                    >
                        {currentItems.map((training) => (
                            <div
                                key={training.id}
                                className="p-2.5 bg-white rounded-3xl shadow-[0px_24px_48px_0px_rgba(12,14,58,0.04)] grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-center"
                            >
                                <div className="col-span-1 md:col-span-4">
                                    <Image
                                        src={training.img}
                                        alt="certification image"
                                        width={440}
                                        height={280}
                                        className="w-full rounded-3xl"
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-8">
                                    <div className="p-4 md:p-6">
                                        <h2 className="text-xl md:text-2xl xl:text-3xl text-light-foreground font-anton leading-[1.3] font-normal mb-3">
                                            {training.title}
                                        </h2>
                                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-light-foreground">
                                            {training.degree}
                                        </h3>
                                        {training?.faculty && (
                                            <h4 className="text-base md:text-lg lg:text-xl font-semibold text-light-foreground mt-2">
                                                {training.faculty}
                                            </h4>
                                        )}
                                        <div className="mt-4 flex gap-4 items-center text-sm md:text-base xl:text-lg text-light-foreground/70">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"
                                                    fill="#060C22"
                                                />
                                            </svg>
                                            {training.institute}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination with Arrow Buttons */}
                <div className="flex justify-center items-center gap-5 mt-12">
                    {/* Previous Arrow */}
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-[68px] h-[68px] flex items-center justify-center"
                        disabled={currentPage === 1}
                    >
                        <svg
                            className=" transform rotate-180"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6716 11.0009L11.3076 5.63687L12.7218 4.22266L20.5 12.0009L12.7218 19.779L11.3076 18.3648L16.6716 13.0009H4.5V11.0009H16.6716Z"
                                fill="#060C22"
                            />
                        </svg>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 text-lg font-extrabold transition duration-300 ${
                                currentPage === i + 1
                                    ? "text-light-foreground border-accent "
                                    : "text-light-foreground/50 cursor-pointer hover:text-light-foreground"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* Next Arrow */}
                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-[68px] h-[68px] flex items-center justify-center"
                        disabled={currentPage === totalPages}
                    >
                        <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6716 11.0009L11.3076 5.63687L12.7218 4.22266L20.5 12.0009L12.7218 19.779L11.3076 18.3648L16.6716 13.0009H4.5V11.0009H16.6716Z"
                                fill="#060C22"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
