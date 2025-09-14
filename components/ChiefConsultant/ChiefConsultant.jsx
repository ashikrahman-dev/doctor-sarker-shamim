import Image from "next/image";

export default function ChiefConsultant() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="container grid grid-cols-2 gap-16 items-center">
                <div className="col-span-1">
                    <h2 className="text-[54px] leading-[1.3] font-anton font-normal text-dark">
                        Chief Consultant
                    </h2>
                    <p className="text-2xl text-dark/70 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-12">
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
                <div className="col-span-1">
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
