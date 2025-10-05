import Image from "next/image";

const certificationData = [
    {
        id: 1,
        img: "/images/samorita-hospital-logo.png",
        title: "Professor of Dermatology",
        excerpt: "MH Samorita Hospital & Medical College",
        date: "2025",
        address: "117 Love Road, Dhaka 1208",
    },
];

export default function CurrentPosition() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-6 md:mb-8 xl:mb-10 2xl:mb-12 max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton leading-[1.3] mb-4">
                        Current Position
                    </h2>
                </div>

                {/* Certification card wrapper */}
                <div className="flex flex-col gap-6">
                    {/* Certification card */}
                    {certificationData?.map((certification) => (
                        <div
                            key={certification?.id}
                            className="p-1.5 lg:p-2 2xl:p-2.5 bg-white rounded-3xl shadow-[0px_24px_48px_0px_rgba(12,14,58,0.04)] grid grid-cols-1 md:grid-cols-12 gap-4 xl:gap-5 2xl:gap-6 items-center"
                        >
                            <div className="col-span-1 md:col-span-4">
                                <Image
                                    src={certification?.img}
                                    alt="certification image"
                                    width={440}
                                    height={280}
                                    className="w-full rounded-3xl"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-8">
                                {/* Content */}
                                <div className="p-4 xl:p-5 2xl:p-6">
                                    {/* Location & Date */}
                                    <span className="bg-sky-blue py-1.5 px-4 text-light-foreground rounded-full text-xs lg:text-sm leading-[1.42] tracking-[0.14px] mb-4 inline-flex">
                                        {certification?.date}
                                    </span>
                                    {/* Title */}
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-light-foreground font-anton leading-[1.3] font-normal mb-3 ">
                                        {certification?.title}
                                    </h2>
                                    <p className="font-normal text-sm sm:text-base lg:text-lg xl:text-xl text-dark/70">
                                        {certification?.excerpt}
                                    </p>
                                    <p className="font-normal text-sm sm:text-base lg:text-lg text-dark/70 mt-2">
                                        {certification?.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
