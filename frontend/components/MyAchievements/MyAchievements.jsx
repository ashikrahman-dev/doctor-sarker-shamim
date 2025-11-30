"use client";

// import Splide from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/css";
import { StrapiImage } from "../StrapiImage/StrapiImage";

export default function MyAchievements({ data }) {
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
                    {data?.map((slide) => (
                        <SplideSlide key={slide.id}>
                            <StrapiImage
                                src={slide?.image?.url}
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
