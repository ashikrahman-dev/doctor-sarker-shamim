"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const experiencesData = [
    {
        id: 1,
        img: "/images/samorita-hospital-logo.png",
        institute: "MH Samorita Hospital and Medical College",
        department: "Dept. of Dermatology & Venereology",
        role: "Professor, Dermatology",
        date: "Aug 8, 2024 to Present",
    },
    {
        id: 2,
        img: "/images/samorita-hospital-logo.png",
        institute: "MH Samorita Hospital and Medical College",
        department: "Dept. of Dermatology & Venereology",
        role: "Associate Professor, Dermatology",
        date: "July 31, 2019 to Present",
    },
    {
        id: 3,
        img: "/images/samorita-hospital-logo.png",
        institute: "MH Samorita Hospital and Medical College",
        department: "Dept. of Dermatology & Venereology",
        role: "Assistant Professor, Dermatology",
        date: "June 1, 2015 to July 30, 2019",
    },
    {
        id: 4,
        img: "/images/samorita-hospital-logo.png",
        institute: "Bangabandhu Sheikh Mujib Medical University",
        department: "Dept. of Dermatology & Venereology",
        role: "Medical Officer",
        date: "July 01, 2003 to October 2010",
    },
    {
        id: 5,
        img: "/images/samorita-hospital-logo.png",
        institute: "Bangabandhu Sheikh Mujib Medical University",
        department: "Dept. of Dermatology & Venereology",
        role: "Medical Officer",
        date: "July 01, 2003 to October 2010",
    },
];

export default function Experiences() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(experiencesData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = experiencesData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-6 md:mb-8 xl:mb-10 2xl:mb-12 max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-anton leading-[1.3] mb-4">
                        Experiences
                    </h2>
                </div>

                {/* Experience Items with Animation */}
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
                        {currentItems.map((experience) => (
                            <div
                                key={experience?.id}
                                className="p-1.5 lg:p-2 2xl:p-2.5 bg-white rounded-3xl shadow-[0px_24px_48px_0px_rgba(12,14,58,0.04)] grid grid-cols-12 gap-4 xl:gap-5 2xl:gap-6 items-center"
                            >
                                <div className="col-span-4">
                                    <Image
                                        src={experience?.img}
                                        alt="experience image"
                                        width={440}
                                        height={280}
                                        className="w-full rounded-3xl"
                                    />
                                </div>
                                <div className="col-span-8">
                                    {/* Content */}
                                    <div className="p-4 xl:p-5 2xl:p-6">
                                        {/* Location & Date */}
                                        <span className="bg-sky-blue py-1.5 px-4 text-light-foreground rounded-full text-xs lg:text-sm leading-[1.42] tracking-[0.14px] mb-4 inline-flex">
                                            {experience?.date}
                                        </span>
                                        {/* Title */}
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-light-foreground font-anton leading-[1.3] font-normal mb-3">
                                            {experience?.institute}
                                        </h2>
                                        <p className="font-normal text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-dark/70">
                                            {experience?.department}
                                        </p>
                                        <p className="font-normal text-sm sm:text-base lg:text-lg text-dark/70 mt-2">
                                            {experience?.role}
                                        </p>
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
