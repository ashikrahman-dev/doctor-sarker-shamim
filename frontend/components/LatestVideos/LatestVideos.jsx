"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useState } from "react";
import { StrapiImage } from "../StrapiImage/StrapiImage";

// YouTube URL থেকে Video ID extract করার function
const getYouTubeVideoId = (url) => {
    if (!url) return null;

    // Different YouTube URL formats handle করা
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /^([a-zA-Z0-9_-]{11})$/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }

    return null;
};

export default function LatestVideos({ data }) {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef({});

    const handlePlayVideo = (videoId) => {
        setPlayingVideo(videoId);
    };

    const handleCloseVideo = () => {
        setPlayingVideo(null);
    };

    return (
        <div className="py-12 md:py-16 xl:py-20 2xl:py-24 overflow-hidden bg-[linear-gradient(180deg,rgba(255,211,156,1)_0%,rgba(255,250,244,1)_100%)]">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton leading-[1.3] mb-4">
                        Latest Videos
                    </h2>
                </div>

                {/* Latest Videos Slider */}
                <div className="pt-6 lg:pt-8 xl:pt-10 2xl:pt-12 latest-video-slider">
                    <Splide
                        hasTrack={false}
                        options={{
                            type: "loop",
                            perPage: 1,
                            perMove: 1,
                            gap: "24px",
                            pagination: true,
                            arrows: true,
                            autoplay: playingVideo ? false : true,
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
                            {data?.map((slide) => {
                                const videoId = getYouTubeVideoId(
                                    slide?.video_url
                                );

                                return (
                                    <SplideSlide
                                        className="pt-2 pb-4"
                                        key={slide?.id}
                                    >
                                        <div className="relative rounded-4xl overflow-hidden pb-12">
                                            {playingVideo === slide.id ? (
                                                // YouTube Video Player
                                                <div
                                                    className="relative w-full"
                                                    style={{
                                                        paddingBottom: "56.25%",
                                                    }}
                                                >
                                                    <iframe
                                                        ref={(el) =>
                                                            (videoRefs.current[
                                                                slide.id
                                                            ] = el)
                                                        }
                                                        className="absolute top-0 left-0 w-full h-full rounded-4xl"
                                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                                        title={
                                                            slide?.title ||
                                                            "YouTube video"
                                                        }
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                    {/* Close button */}
                                                    <button
                                                        onClick={
                                                            handleCloseVideo
                                                        }
                                                        className="absolute -top-2 -right-2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                                                        aria-label="Close video"
                                                    >
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M18 6L6 18M6 6L18 18"
                                                                stroke="#060C22"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ) : (
                                                // Poster with Play Button
                                                <>
                                                    <div
                                                        className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                                                        onClick={() =>
                                                            handlePlayVideo(
                                                                slide.id
                                                            )
                                                        }
                                                    >
                                                        <div className="button is-play">
                                                            <div className="button-outer-circle has-scale-animation"></div>
                                                            <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                                                            <div className="button-icon is-play">
                                                                <svg
                                                                    height="100%"
                                                                    width="100%"
                                                                    viewBox="0 0 130 130"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g opacity="0.8">
                                                                        <path
                                                                            className="path"
                                                                            d="M64.9997 119.165C35.0842 119.165 10.833 94.9139 10.833 64.9987C10.833 35.0833 35.0842 10.832 64.9997 10.832C94.9148 10.832 119.166 35.0833 119.166 64.9987C119.166 94.9139 94.9148 119.165 64.9997 119.165ZM57.535 45.5777C57.1791 45.3404 56.7609 45.2138 56.333 45.2138C55.1365 45.2138 54.1663 46.1839 54.1663 47.3805V82.617C54.1663 83.0449 54.2931 83.463 54.5303 83.8189C55.1939 84.8145 56.5394 85.0837 57.535 84.4196L83.9623 66.8014C84.2001 66.6427 84.4043 66.4384 84.5631 66.2007C85.2271 65.2051 84.9579 63.8596 83.9623 63.196L57.535 45.5777Z"
                                                                            fill="white"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <StrapiImage
                                                        src={slide?.poster?.url}
                                                        alt={
                                                            slide?.title ||
                                                            "Video Poster"
                                                        }
                                                        width={1470}
                                                        height={590}
                                                        className="w-full h-auto rounded-4xl cursor-pointer"
                                                        onClick={() =>
                                                            handlePlayVideo(
                                                                slide.id
                                                            )
                                                        }
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </SplideSlide>
                                );
                            })}
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
        </div>
    );
}
