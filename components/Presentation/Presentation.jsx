"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Image from "next/image";

const presentationData = [
    {
        id: crypto.randomUUID(),
        img: "/images/conference-placeholder-img.svg",
        title: "COSDERMINDIA 2024",
        excerpt:
            "Intradermal Immunoglobulin E (IgE) Injection in a Specific Interval With Emollient in the Control of Chronic Idiopathic Urticaria and Allergic Rhinitis",
        date: "10 May, 2024",
        category: "Presentation",
        country: "India",
        flag: "/images/india.png",
        author: "John Doe",
        designation: "Professor of Dermatology",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/conference-placeholder-img.svg",
        title: "DERMA MeDeCON 2024",
        excerpt:
            "Intradermal Immunoglobulin E (IgE) Injection in a Specific Interval With Emollient in the Control of Chronic Idiopathic Urticaria and Allergic Rhinitis",
        date: "6 Nov, 2023",
        category: "Presentation",
        country: "Bangladesh",
        flag: "/images/bangladesh-flag.svg",
        author: "John Doe",
        designation: "Professor of Dermatology",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/conference-placeholder-img.svg",
        title: "DSCON 2024",
        excerpt:
            "Intradermal Immunoglobulin E (IgE) Injection in a Specific Interval With Emollient in the Control of Chronic Idiopathic Urticaria and Allergic Rhinitis",
        date: "10 May, 2024",
        category: "Presentation",
        country: "India",
        flag: "/images/india.png",
        author: "John Doe",
        designation: "Professor of Dermatology",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/conference-placeholder-img.svg",
        title: "AMWC 2023",
        excerpt:
            "Intradermal Immunoglobulin E (IgE) Injection in a Specific Interval With Emollient in the Control of Chronic Idiopathic Urticaria and Allergic Rhinitis",
        date: "6 Nov, 2023",
        category: "Presentation",
        country: "Monaco",
        flag: "/images/monaco-flag.svg",
        author: "John Doe",
        designation: "Professor of Dermatology",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
];

export default function Presentation() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-12 max-w-[854px] mx-auto">
                    <div className="text-dark self-stretch font-normal text-[54px] font-anton leading-[1.3] mb-4">
                        Presentation
                    </div>
                    <p className="font-normal text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. ua.
                    </p>
                </div>

                {/* Grid Presentation */}
                <div className="pt-8 sm:pt-10 md:pt-12 latest-video-slider">
                    <Splide
                        hasTrack={false}
                        options={{
                            type: "loop",
                            perPage: 4,
                            perMove: 1,
                            gap: "24px",
                            pagination: false,
                            arrows: true,
                            autoplay: true,
                            interval: 5000,
                            speed: 1500,
                            breakpoints: {
                                640: { perPage: 1 },
                                768: { pagination: false },
                                1024: { perPage: 1, pagination: false },
                                1400: { perPage: 1 },
                            },
                        }}
                    >
                        <SplideTrack>
                            {presentationData?.map((presentation) => (
                                <SplideSlide
                                    className="pt-2 pb-8"
                                    key={presentation?.id}
                                >
                                    <div className="flex flex-col col-span-1 bg-white rounded-xl border border-dark-5/30 p-1 transform-fill duration-300  shadow-[0px_24px_48px_0px_rgba(12,14,58,0.0)] hover:shadow-[0px_14px_28px_0px_rgba(12,14,58,0.10)] ">
                                        <div className="relative">
                                            <Image
                                                src={presentation?.img}
                                                alt="Featured image"
                                                width={340}
                                                height={250}
                                                className="w-full rounded-xl"
                                            />

                                            {/* Category Name */}
                                            <span className=" absolute top-4 left-4 text-xs bg-white rounded-full px-3 py-1.5 text-light-foreground">
                                                {presentation?.category}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-5 px-4 pb-6">
                                            {/* Date */}
                                            <span className="inline-flex items-center gap-2 text-sm font-normal text-light-secondary mb-3">
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
                                                {presentation?.date}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-lg font-anton font-normal leading-[1.3]">
                                                {presentation?.title}
                                            </h3>
                                            {/* Divider */}
                                            <div className="border-t border-dark-2/20 mt-4 mb-3"></div>

                                            {/* Author box */}
                                            <div className="flex items-center justify-between gap-6">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={presentation?.flag}
                                                        alt="Author"
                                                        width={30}
                                                        height={30}
                                                        className="w-9 h-9 rounded-full"
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold font-plus-jakarta-sans text-light-foreground mb-1">
                                                            {presentation?.country}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Bookmark Button */}
                                                <button className="w-9 h-9 rounded-full bg-dark-6 inline-flex justify-center items-center cursor-pointer group">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.33366 1.33398H12.667C13.0352 1.33398 13.3337 1.63246 13.3337 2.00065V14.7629C13.3337 14.9469 13.1844 15.0963 13.0003 15.0963C12.9377 15.0963 12.8763 15.0785 12.8233 15.0453L8.00033 12.0215L3.17739 15.0453C3.02141 15.1431 2.8157 15.0959 2.71791 14.9399C2.68464 14.8869 2.66699 14.8255 2.66699 14.7629V2.00065C2.66699 1.63246 2.96547 1.33398 3.33366 1.33398ZM12.0003 2.66732H4.00033V12.9556L8.00033 10.4478L12.0003 12.9556V2.66732Z"
                                                            fill="black"
                                                            className="transition-all duration-200 group-hover:fill-light-accent"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>

                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev group">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.8284 12.9991L13.1924 18.3631L11.7782 19.7773L4 11.9991L11.7782 4.22102L13.1924 5.63522L7.8284 10.9991L20 10.9991L20 12.9991L7.8284 12.9991Z"
                                        fill="#060C22"
                                        className="transition-colors duration-200 group-hover:fill-dark"
                                    />
                                </svg>
                            </button>
                            <button className="splide__arrow splide__arrow--next group">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.1716 11.0009L10.8076 5.63687L12.2218 4.22266L20 12.0009L12.2218 19.779L10.8076 18.3648L16.1716 13.0009H4V11.0009H16.1716Z"
                                        fill="#060C22"
                                        className="transition-colors duration-200 group-hover:fill-dark"
                                    />
                                </svg>
                            </button>
                        </div>
                    </Splide>
                </div>
            </div>
        </section>
    );
}
