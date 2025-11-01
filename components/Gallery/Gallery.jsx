"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const treatmentData = [
    {
        id: 1,
        img: "/images/treatment-result-img-1.jpg",
        alt: "Professor of Dermatology",
        category: "Training",
    },
    {
        id: 2,
        img: "/images/treatment-result-img-2.jpg",
        alt: "Professor of Dermatology",
        category: "SEMINAR, SYMPOSIUM, CONFERENCE",
    },
    {
        id: 3,
        img: "/images/treatment-result-img-3.jpg",
        alt: "Professor of Dermatology",
        category: "PRESENTATION",
    },
    {
        id: 4,
        img: "/images/treatment-result-img-4.jpg",
        alt: "Professor of Dermatology",
        category: "PANELIST, MODERATOR & WORKSHOP",
    },
    {
        id: 5,
        img: "/images/treatment-result-img-5.jpg",
        alt: "Professor of Dermatology",
        category: "PANELIST, MODERATOR & WORKSHOP",
    },
    {
        id: 6,
        img: "/images/treatment-result-img-6.jpg",
        alt: "Professor of Dermatology",
        category: "SEMINAR, SYMPOSIUM, CONFERENCE",
    },
    {
        id: 7,
        img: "/images/treatment-result-img-7.jpg",
        alt: "Professor of Dermatology",
        category: "PRESENTATION",
    },
    {
        id: 8,
        img: "/images/treatment-result-img-8.jpg",
        alt: "Professor of Dermatology",
        category: "PRESENTATION",
    },
    {
        id: 9,
        img: "/images/treatment-result-img-9.jpg",
        alt: "Professor of Dermatology",
        category: "SEMINAR, SYMPOSIUM, CONFERENCE",
    },
    {
        id: 10,
        img: "/images/treatment-result-img-7.jpg",
        alt: "Professor of Dermatology",
        category: "Training",
    },
];

export default function Gallery() {
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Update itemsPerPage based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(9);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Extract unique categories from data
    const categories = useMemo(() => {
        const uniqueCategories = [
            ...new Set(treatmentData.map((item) => item.category)),
        ];
        return ["All", ...uniqueCategories];
    }, []);

    // Filter data based on selected category (case-insensitive)
    const filteredData = useMemo(() => {
        if (selectedCategory === "All") return treatmentData;
        return treatmentData.filter(
            (item) =>
                item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
    }, [selectedCategory]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    // Reset to page 1 when category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-white overflow-hidden">
            <div className="container">
                {/* Category Filter */}
                <div className="mb-8 md:mb-12">
                    <div
                        className="flex flex-nowrap gap-2 md:gap-3 justify-start overflow-x-scroll md:overflow-auto snap-x snap-proximity max-h-full pb-2
                        [&::-webkit-scrollbar]:h-1
                        [&::-webkit-scrollbar]:w-full
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-accent-bg/40
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-light-accent/50
                        dark:[&::-webkit-scrollbar-track]:bg-light-accent
                        dark:[&::-webkit-scrollbar-thumb]:bg-light-accent
                    "
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 md:px-6 py-2 md:py-3 shrink-0 rounded-full text-xs md:text-sm tracking-wide font-semibold transition-all duration-300 cursor-pointer border uppercase  ${
                                    selectedCategory === category
                                        ? "bg-light-accent text-white shadow-md border-light-accent"
                                        : "bg-white text-light-foreground border-light-foreground hover:bg-light-accent hover:text-white hover:border-light-accent"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Gallery with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${currentPage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 0.25],
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {currentItems.map((treatment, index) => (
                            <motion.div
                                key={treatment.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={treatment.img}
                                    alt={treatment.alt}
                                    width={470}
                                    height={410}
                                    className="w-full"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination - only show if there are multiple pages */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 md:gap-5 mt-10 md:mt-12">
                        {/* Previous Arrow */}
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-12 xl:w-[68px] h-12 xl:h-[68px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === 1}
                        >
                            <svg
                                className="transform rotate-180"
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
                                className={`px-1 md:px-4 py-2 text-sm md:text-base xl:text-lg font-extrabold transition duration-300 ${
                                    currentPage === i + 1
                                        ? "text-light-foreground border-accent"
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
                            className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-12 xl:w-[68px] h-12 xl:h-[68px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                )}

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-lg text-light-foreground/60">
                            No images found for the selected category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
