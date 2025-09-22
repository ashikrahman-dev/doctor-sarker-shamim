import Image from "next/image";
import AppointmentButton from "../Button/AppointmentButton/AppointmentButton";

export default function HomeBanner() {
    return (
        <section className="bg-dark-8 pt-[180px] relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-[980px] before:h-full before:bg-[linear-gradient(270deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)] after:absolute after:content-[''] after:right-0 after:top-0 after:w-[980px] after:h-full after:bg-[linear-gradient(90deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)]">
            <div className="container z-10 relative">
                <div className="text-center">
                    <span className="inline-flex text-xs lg:text-sm font-medium tracking-[0.14px] leading-[1.42] text-light-foreground px-4 py-1.75 bg-sky-blue rounded-full mb-3">
                        Transforming Lives, Redefining Beauty
                    </span>
                    <h1 className="text-4xl xl:text-5xl 2xl:text-7xl text-light-foreground leading-[1.3] font-normal font-anton">
                        Professor Dr. Sarker Mahbub Ahmed Shamim
                    </h1>
                </div>

                {/* Content box */}
                <div className="grid grid-cols-12 gap-6 items-end">
                    {/* Left */}
                    <div className="col-span-4 mb-28">
                        {/* Counter bos */}
                        <div className="flex gap-6">
                            <div className="w-full rounded-2xl bg-white/35 text-center p-4">
                                <h3 className="text-3xl md:text-4xl xl:text-5xl text-light-foreground font-anton leading-[1.4]">
                                    50,000
                                </h3>
                                <p className="text-light-foreground text-sm 2xl:text-base leading-[1.5]">
                                    Patient Served
                                </p>
                            </div>
                            <div className="w-full rounded-2xl bg-white/35 text-center p-4">
                                <h3 className="text-3xl md:text-4xl xl:text-5xl text-light-foreground font-anton leading-[1.4]">
                                    25+
                                </h3>
                                <p className="text-light-foreground text-sm 2xl:text-base leading-[1.5]">
                                    Years of Experience
                                </p>
                            </div>
                        </div>
                        <p className="text-lg xl:text-xl 2xl:text-2xl text-light-foreground leading-[1.3] my-7.5">
                            American Board-Certified Aesthetic Dermatologist
                        </p>

                        {/* CTA buttons (Right) */}
                        <div className="mt-8">
                            <AppointmentButton />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="-ms-8 xl:-ms-12 2xl:-ms-20 -me-8 xl:-me-12 2xl:-me-20">
                            <Image
                                src="/images/dr-shamim.png"
                                alt="Dr Shamim"
                                width={623}
                                height={807}
                                className=""
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="w-full rounded-2xl bg-white/35 py-9 px-6 backdrop-blur-[7px] mb-28">
                            <h3 className="text-lg xl:text-xl 2xl:text-2xl text-light-foreground leading-[1.32] font-anton">
                                To provide state of the art treatments,
                                technologies and procedures for management of
                                your dermatology, skin care and aesthetic
                                concerns.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
