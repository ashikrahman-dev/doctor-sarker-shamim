"use client";

// import Splide from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

import "@splidejs/splide/css";

const myAchievementData = [
    {
        id: 1,
        logo: "/images/achievement-logo-1.svg",
    },
    {
        id: 2,
        logo: "/images/achievement-logo-2.svg",
    },
    {
        id: 3,
        logo: "/images/achievement-logo-3.svg",
    },
    {
        id: 4,
        logo: "/images/achievement-logo-4.svg",
    },
    {
        id: 5,
        logo: "/images/achievement-logo-5.svg",
    },
    {
        id: 6,
        logo: "/images/achievement-logo-6.svg",
    },
    {
        id: 7,
        logo: "/images/achievement-logo-7.svg",
    },
    {
        id: 8,
        logo: "/images/achievement-logo-8.svg",
    },
];

export default function MyAchievements() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark overflow-hidden">
            <div className="container">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-normal leading-[1.2] text-white text-center font-anton">
                    My Achievement’s
                </h2>
            </div>

            {/* Partner Logos */}
            <div className="pt-8 xl:pt-10 2xl:pt-12 ">
                <Splide
                    aria-label="My Favorite Images"
                    extensions={{ AutoScroll }}
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        perPage: 7,
                        autoScroll: {
                            speed: 0.6, // Scrolling speed (1 = slow, 3 = fast)
                            pauseOnHover: false, // Pause scrolling on hover
                            pauseOnFocus: false, // Pause scrolling on focus
                        },
                        gap: "36px",
                        arrows: false,
                        pagination: false,
                        // Responsive breakpoints
                        breakpoints: {
                            1299: {
                                gap: "24px",
                                perPage: 6,
                            },
                            1199: {
                                gap: "20px",
                                perPage: 5,
                            },
                            768: {
                                perPage: 4,
                                gap: "16px",
                            },
                            480: {
                                perPage: 3,
                                gap: "12px",
                            },
                            320: {
                                perPage: 2,
                            },
                        },
                    }}
                    className="flex"
                >
                    {myAchievementData.map((slide) => (
                        <SplideSlide key={slide.id}>
                            <Image
                                src={slide.logo}
                                alt="Brand Logo"
                                width={220}
                                height={100}
                                className="max-w-full h-auto w-full shadow-[0_16px_32px_rgba(12,14,58,0.04)]"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
}
