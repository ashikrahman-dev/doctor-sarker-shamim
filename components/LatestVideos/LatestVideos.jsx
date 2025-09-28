"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRef, useState } from "react";

const latestVideos = [
    {
        id: crypto.randomUUID(),
        poster: "/images/video-poster-img.png",
        videoUrl:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title: "Sample Video 1",
    },
    {
        id: crypto.randomUUID(),
        poster: "/images/video-poster-img.png",
        videoUrl:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title: "Sample Video 2",
    },
    {
        id: crypto.randomUUID(),
        poster: "/images/video-poster-img.png",
        videoUrl:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title: "Sample Video 3",
    },
];

export default function LatestVideos() {
    const [playingVideo, setPlayingVideo] = useState(null);
    const [wasPlaying, setWasPlaying] = useState(false);
    const videoRefs = useRef({});

    const handlePlayVideo = (videoId, videoUrl) => {
        if (playingVideo && videoRefs.current[playingVideo]) {
            videoRefs.current[playingVideo].pause();
        }

        setPlayingVideo(videoId);

        setTimeout(() => {
            if (videoRefs.current[videoId]) {
                videoRefs.current[videoId].play();
            }
        }, 100);
    };

    const handleVideoEnded = () => {
        setPlayingVideo(null);
        setWasPlaying(false);
    };

    const handleVideoPlay = () => {
        setWasPlaying(true);
    };

    const handleVideoPause = () => {
        setWasPlaying(false);
    };

    return (
        <div className="py-12 md:py-16 xl:py-20 2xl:py-24  overflow-hidden bg-white">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-anton leading-[1.3] mb-4">
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
                            {latestVideos?.map((slide) => (
                                <SplideSlide
                                    className="pt-2 pb-4"
                                    key={slide?.id}
                                >
                                    <div className="relative rounded-4xl overflow-hidden pb-12">
                                        {playingVideo === slide.id ? (
                                            // Video Player
                                            <video
                                                ref={(el) =>
                                                    (videoRefs.current[
                                                        slide.id
                                                    ] = el)
                                                }
                                                className="w-full h-auto rounded-4xl"
                                                controls
                                                poster={slide.poster}
                                                onEnded={handleVideoEnded}
                                                onPause={handleVideoPause}
                                                onPlay={handleVideoPlay}
                                                style={{ maxHeight: "590px" }}
                                                onSeeking={(e) => {
                                                    setWasPlaying(
                                                        !e.target.paused
                                                    );
                                                }}
                                                onSeeked={(e) => {
                                                    if (wasPlaying) {
                                                        e.target
                                                            .play()
                                                            .catch(() => {});
                                                    }
                                                    setTimeout(
                                                        () =>
                                                            setWasPlaying(
                                                                false
                                                            ),
                                                        200
                                                    );
                                                }}
                                            >
                                                <source
                                                    src={slide.videoUrl}
                                                    type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                            </video>
                                        ) : (
                                            // Poster with Play Button
                                            <>
                                                <div
                                                    className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                                                    onClick={() =>
                                                        handlePlayVideo(
                                                            slide.id,
                                                            slide.videoUrl
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
                                                <Image
                                                    src={
                                                        slide?.poster ||
                                                        "/images/video-poster-img.png"
                                                    }
                                                    alt={
                                                        slide?.title ||
                                                        "Video Poster"
                                                    }
                                                    width={1470}
                                                    height={590}
                                                    className="w-full h-auto rounded-4xl cursor-pointer"
                                                    onClick={() =>
                                                        handlePlayVideo(
                                                            slide.id,
                                                            slide.videoUrl
                                                        )
                                                    }
                                                />
                                            </>
                                        )}
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
        </div>
    );
}
