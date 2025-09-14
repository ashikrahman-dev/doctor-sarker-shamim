import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[linear-gradient(179deg,rgba(255,211,156,1)_0%,rgba(255,250,244,1)_100%)]">
            <div className="container">
                {/* Bg shape */}
                <div className="relative">
                    <div className="w-[calc(100%-64px)] h-[384px] bg-light-foreground rounded-[48px] absolute left-8 right-8 -bottom-8 z-0"></div>
                    <div className="grid grid-cols-12 items-center p-12 gap-16 rounded-[36px] bg-[linear-gradient(180deg,rgba(255,150,17,1)_0%,rgba(248,204,148,1)_100%)] relative z-10">
                        <div className="col-span-6 ">
                            <Image
                                src="/images/call-to-action-img.png"
                                alt="Call to action"
                                width={654}
                                height={433}
                            />
                        </div>

                        <div className="col-span-6">
                            <h2 className="text-[54px] text-light-foreground font-anton leading-[1.3] mb-4">
                                Share Your Thoughts
                            </h2>

                            <p className="text-2xl text-light-foreground/70 mb-12">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="relative inline-flex">
                                <Link
                                    href="/"
                                    className="bg-light-foreground rounded-full py-4 px-8 text-white font-semibold leading-[1.2] h-[58px] inline-flex gap-2 items-center group transition-colors duration-300 hover:bg-accent-bg hover:text-light-foreground relative z-10"
                                >
                                    Make An Appointments
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.476 9.16609L9.00601 4.69609L10.1845 3.51758L16.6663 9.99943L10.1845 16.4812L9.00601 15.3027L13.476 10.8328H3.33301V9.16609H13.476Z"
                                            fill="white"
                                            className="transition-all duration-300 group-hover:fill-light-foreground"
                                        />
                                    </svg>
                                </Link>

                                {/* Arrow icon */}
                                <div className="absolute -right-34 -top-18 z-0">
                                    <Image src="/images/cta-arrow-icon.svg" alt="arrow icon" width={122} height={135}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
