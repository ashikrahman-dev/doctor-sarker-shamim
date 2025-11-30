"use client";

import Image from "next/image";
import { useState } from "react";
import AppointmentButton from "../Button/AppointmentButton/AppointmentButton";
import { StrapiImage } from "../StrapiImage/StrapiImage";

export default function ChiefConsultant({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24  bg-white overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center">
                <div className="col-span-1 order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-[1.3] font-anton font-normal text-dark">
                        {data?.title}
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl text-dark/70 mt-4">
                        {data?.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 xl:gap-6 mt-8 xl:mt-10 2xl:mt-12">
                        {data?.logos?.map((logo) => (
                            <div key={logo?.id} className="col-span-1">
                                <StrapiImage
                                    src={logo?.url}
                                    alt={
                                        logo?.alternativeText ||
                                        "Chief consultant"
                                    }
                                    width={350}
                                    height={130}
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA buttons (Right) */}
                    <div className="mt-8 xl:mt-10 2xl:mt-12 flex justify-center md:justify-start">
                        {/* Popup Modal */}
                        <AppointmentButton />
                    </div>
                </div>
                <div className="col-span-1 order-1 md:order-2">
                    <Image
                        src="/images/chief-consultant-img.png"
                        alt="Chief consultant"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
