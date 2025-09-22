"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const certificationData = [
    {
        id: 1,
        img: "/images/training-img.svg",
        title: "MD Codes Tour 2019, Allergan Medical Institute, Cutting Edge and Precise Cosmetic Treatments With Allergan MD Codes. Allergan MD Codes is an innovative concept that has transformed the way cosmetic injectables such as Juvederm and Botox are used in Aesthetic medicine, providing patients with a more holistic approach to anti-aging. Developed by Dr. Mauricio de Maio",
        country: "INDIA",
        year: "2019",
    },
    {
        id: 2,
        img: "/images/training-img.svg",
        title: "2nd B.A.D CON 2019, Bangladesh Academy of Dermatology, Hands on Training on Dermoscopy by Dr. Subrata Malakar",
        country: "BANGLADESH",
        year: "2019",
    },
    {
        id: 3,
        img: "/images/training-img.svg",
        title: "Masters Course in Botulinum Toxin A And Fillers American Academy of Aesthetic Medicine (AAAM), USA Hands on Training by Dr Raj Acquilla",
        country: "USA",
        year: "2018",
    },
    {
        id: 4,
        img: "/images/training-img.svg",
        title: "Master’s Course on Hair Transplantation  American Academy of Aesthetic Medicine (AAAM),USA Hands on Training by Dr. Akaki Tsilosani",
        country: "USA",
        year: "2016",
    },
    {
        id: 5,
        img: "/images/training-img.svg",
        title: "Clinical Workshops in Level 2 Course 2016 American Academy of Aesthetic Medicine (AAAM), USA",
        country: "Malaysia",
        year: "2016",
    },
    {
        id: 6,
        img: "/images/training-img.svg",
        title: "Clinical Workshops in Level 1 Course 2015 American Academy of Aesthetic Medicine (AAAM), Dubai, UAE",
        country: "UAE",
        year: "2015",
    },
    {
        id: 7,
        img: "/images/training-img.svg",
        title: "Breast Filler by Aquafilling, Czech Republic Hands on Training by Dr. Klokol Yevgen, Plastic Surgeon",
        country: "BANGLADESH",
        year: "2014",
    },
];

export default function Training() {
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
                    <div className="text-dark self-stretch font-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-anton leading-[1.3] mb-4">
                        Training
                    </div>
                    <p className="font-normal text-sm sm:text-base lg:text-xl 2xl:text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
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
                                className="p-2.5 bg-white rounded-3xl shadow-[0px_24px_48px_0px_rgba(12,14,58,0.04)] grid grid-cols-12 gap-6 items-center"
                            >
                                <div className="col-span-4">
                                    <Image
                                        src={training?.img}
                                        alt="certification image"
                                        width={440}
                                        height={280}
                                        className="w-full rounded-3xl"
                                    />
                                </div>
                                <div className="col-span-8">
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-light-foreground leading-[1.3] mb-4">
                                            {training?.title}
                                        </h2>
                                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-light-foreground/70">
                                            {training?.country}
                                        </h3>
                                        <div className="mt-4 flex gap-4 items-center text-sm md:text-base xl:text-lg text-light-foreground/70">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                                                    fill="#060C22"
                                                />
                                            </svg>

                                            {training?.year}
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
