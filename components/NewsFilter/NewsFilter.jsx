"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function NewsFilter({ data }) {
    const itemsPerPage = 8; // 2x4 grid
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Extract unique categories from data
    const categories = useMemo(() => {
        if (!data) return ["All"];
        const uniqueCategories = [
            ...new Set(data.map((article) => article.category)),
        ];
        return ["All", ...uniqueCategories];
    }, [data]);

    // Filter data based on selected category
    const filteredData = useMemo(() => {
        if (!data) return [];
        if (selectedCategory === "All") return data;
        return data.filter((article) => article.category === selectedCategory);
    }, [data, selectedCategory]);

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
        <div className="container py-12 md:py-16 xl:py-20 2xl:py-24 bg-white overflow-hidden">
            {/* Category Filter */}
            <div className="mb-8 md:mb-12">
                <div className="flex flex-wrap gap-3 justify-start">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-3 rounded-full text-sm tracking-wide font-semibold transition-all duration-300 cursor-pointer border  ${
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

            {/* Grid Articles with Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${selectedCategory}-${currentPage}`} // triggers animation on page/category change
                    initial={{ opacity: 0, y: 20 }} // start slightly below
                    animate={{ opacity: 1, y: 0 }} // slide to position
                    exit={{ opacity: 0, y: -20 }} // exit upward
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 0.25],
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
                >
                    {currentItems.map((article, index) => (
                        <motion.div
                            key={article?.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1, // staggered animation
                                ease: [0.25, 0.1, 0.25, 0.25],
                            }}
                            className="flex flex-col col-span-1 bg-white rounded-xl border border-dark-5/30 p-1 transform-fill duration-300 shadow-[0px_24px_48px_0px_rgba(12,14,58,0.0)] hover:shadow-[0px_24px_48px_0px_rgba(12,14,58,0.15)]"
                        >
                            <div className="relative">
                                <Image
                                    src={article?.img}
                                    alt="Featured image"
                                    width={340}
                                    height={250}
                                    className="w-full rounded-xl"
                                />

                                {/* Category Name */}
                                <span className="absolute top-4 left-4 text-xs bg-white rounded-full px-3 py-1.5 text-light-foreground uppercase">
                                    {article?.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="pt-5 px-4 pb-6">
                                {/* Date */}
                                <span className="inline-flex items-center gap-2 text-sm font-normal text-light-secondary mb-3">
                                    <Image
                                        src="/images/calendar-icon.svg"
                                        alt="Calendar"
                                        width={20}
                                        height={20}
                                    />
                                    {article?.date}
                                </span>

                                {/* Title */}
                                <Link href={`/news/${article?.id}`}>
                                    <h3 className="text-lg font-anton font-normal leading-[1.3] mb-3 min-h-12">
                                        {article?.title}
                                    </h3>
                                </Link>
                                {/* Excerpt */}
                                <p className="text-sm text-light-foreground/60 font-normal font-plus-jakarta-sans line-clamp-3">
                                    {article?.excerpt}
                                </p>
                                {/* Divider */}
                                <div className="border-t border-dark-2/20 mt-4 mb-3"></div>

                                {/* Author box */}
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={article?.authorImg}
                                            alt="Author"
                                            width={30}
                                            height={30}
                                            className="w-9 h-9 rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold font-plus-jakarta-sans text-light-foreground mb-1">
                                                {article?.author}
                                            </span>
                                            <span className="text-xs text-light-foreground/60">
                                                {article?.designation}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Pagination - only show if there are multiple pages */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-5 mt-12">
                    {/* Previous Arrow */}
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-[68px] h-[68px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                            className={`px-4 py-2 text-lg font-extrabold transition duration-300 ${
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
                        className="rounded-full bg-[#33f23333] hover:bg-light-accent transition-colors duration-300 cursor-pointer w-[68px] h-[68px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                        No articles found for the selected category.
                    </p>
                </div>
            )}
        </div>
    );
}
