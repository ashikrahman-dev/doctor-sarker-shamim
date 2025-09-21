import Image from "next/image";

export default function ChiefConsultant() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24  bg-white overflow-hidden">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center">
                <div className="col-span-1 order-2 md:order-1">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] leading-[1.3] font-anton font-normal text-dark">
                        Chief Consultant
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-dark/70 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>

                    <div className="grid grid-cols-2 gap-4 xl:gap-6 mt-8 xl:mt-10 2xl:mt-12">
                        <div className="col-span-1">
                            <Image
                                src="/images/fhief-cons-logo-1.svg"
                                alt="Chief consultant"
                                width={350}
                                height={130}
                                className="w-full"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/fhief-cons-logo-2.svg"
                                alt="Chief consultant"
                                width={350}
                                height={130}
                                className="w-full"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/fhief-cons-logo-3.svg"
                                alt="Chief consultant"
                                width={350}
                                height={130}
                                className="w-full"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/fhief-cons-logo-4.svg"
                                alt="Chief consultant"
                                width={350}
                                height={130}
                                className="w-full"
                            />
                        </div>
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
