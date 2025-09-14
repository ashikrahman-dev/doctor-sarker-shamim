"use client";

// import Splide from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

import "@splidejs/splide/css";

const socialFeed = [
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-1.jpg",
        alt: "Social feed image",
        socialMedia: "Facebook",
        socialMediaIcon: "/icons/facebook.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-2.jpg",
        alt: "Social feed image",
        socialMedia: "Instagram",
        socialMediaIcon: "/icons/instagram.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-3.jpg",
        alt: "Social feed image",
        socialMedia: "Twitter",
        socialMediaIcon: "/icons/twitter.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-4.jpg",
        alt: "Social feed image",
        socialMedia: "Facebook",
        socialMediaIcon: "/icons/facebook.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-5.jpg",
        alt: "Social feed image",
        socialMedia: "Instagram",
        socialMediaIcon: "/icons/instagram.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-6.jpg",
        alt: "Social feed image",
        socialMedia: "Facebook",
        socialMediaIcon: "/icons/facebook.svg",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/social-feed-img-7.jpg",
        alt: "Social feed image",
        socialMedia: "Facebook",
        socialMediaIcon: "/icons/facebook.svg",
    },
];

export default function Socials() {
    return (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center max-w-[854px] mx-auto">
                    <div className="text-dark self-stretch font-normal text-[54px] font-anton leading-[1.3] mb-4">
                        Socials
                    </div>
                    <p className="font-normal text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>

            {/* Partner Logos */}
            <div className="pt-8 sm:pt-10 md:pt-12 ">
                <Splide
                    aria-label="My Favorite Images"
                    extensions={{ AutoScroll }}
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        perPage: 6.5,
                        autoScroll: {
                            speed: 1, // Scrolling speed (1 = slow, 3 = fast)
                            pauseOnHover: false, // Pause scrolling on hover
                            pauseOnFocus: false, // Pause scrolling on focus
                        },
                        gap: "12px",
                        arrows: false,
                        pagination: false,
                        // Responsive breakpoints
                        breakpoints: {
                            1400: {
                                perPage: 3.5,
                            },
                            768: {
                                perPage: 2.5,
                            },
                            480: {
                                perPage: 2,
                            },
                            320: {
                                perPage: 1.5,
                            },
                        },
                    }}
                    className="flex"
                >
                    {socialFeed.map((slide) => (
                        <SplideSlide key={slide?.id}>
                            <div className="relative rounded-2xl overflow-hidden flex justify-center">
                                {/* Overlay */}
                                <div className="absolute w-full h-full rounded-2xl inset-0 bg-[linear-gradient(177deg,rgba(0,0,0,0)_10.92%,#000_91.26%)] z-10"></div>
                                {/* Social Media Link */}
                                <div className="flex items-center gap-3 px-4 py-3 bg-white/15 text-white absolute  z-30 rounded-2xl backdrop-blur-[7px] bottom-5 text-xl ">
                                    <Image src={slide?.socialMediaIcon || "/icons/facebook.svg"} alt={slide?.socialMedia} width={28} height={28} className="w-7 h-7" />
                                    {slide?.socialMedia || "Facebook"}
                                </div>
                                {/* Image */}
                                <Image
                                    src={slide?.img}
                                    alt="Brand Logo"
                                    width={220}
                                    height={100}
                                    className="max-w-full h-auto w-full rounded-2xl"
                                />
                                
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}
