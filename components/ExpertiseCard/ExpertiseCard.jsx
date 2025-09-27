"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Image from "next/image";

const expertiseData = [
    {
        id: 1,
        img: "/images/my-expertise-img-1.jpg",
        name: "Aesthetic Dermatology & Cosmetic Surgery",
    },
    {
        id: 2,
        img: "/images/my-expertise-img-2.jpg",
        name: "Laser & Dermatosurgery",
    },
    {
        id: 3,
        img: "/images/my-expertise-img-3.jpg",
        name: "Hair Transplantation",
    },
    {
        id: 4,
        img: "/images/my-expertise-img-4.jpg",
        name: "Skin, Sex & Anti Aging Specialist",
    },
    {
        id: 5,
        img: "/images/my-expertise-img-5.jpg",
        name: "Medical Dermatology / Therapeutic Treatments",
    },
];

export default function ExpertiseCard() {
    return (
        <div className="">
            {/* Single card */}

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
                            768: {
                                perPage: 2,
                                gap: "16px",
                                pagination: false,
                            },
                            1024: {
                                perPage: 3,
                                gap: "20px",
                                pagination: false,
                            },
                            1400: { perPage: 4 },
                        },
                    }}
                >
                    <SplideTrack>
                        {expertiseData?.map((expertise) => (
                            <SplideSlide
                                className="pt-2 pb-8"
                                key={expertise?.id}
                            >
                                <div className="pt-[310px] rounded-2xl overflow-hidden relative">
                                    {/* Image */}
                                    <Image
                                        src={expertise?.img}
                                        alt={expertise?.name}
                                        width={500}
                                        height={500}
                                        className="absolute top-0 left-0 w-full h-full object-cover -z-0"
                                    />
                                    <div className="bg-[linear-gradient(177deg,rgba(40,33,23,0)_10.92%,#282117_91.26%)] px-6 pb-11 pt-12.5 z-0 relative">
                                        <h4 className="text-white font-anton text-2xl uppercase tracking-[1.32] min-h-16">
                                            {expertise?.name}
                                        </h4>
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
                                    d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                                    fill="#0E142A"
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
    );
}
