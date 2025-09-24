import Image from "next/image";

const treatmentData = [
    {
        id: 1,
        img: "/images/treatment-result-img-1.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 2,
        img: "/images/treatment-result-img-2.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 3,
        img: "/images/treatment-result-img-3.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 4,
        img: "/images/treatment-result-img-4.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 5,
        img: "/images/treatment-result-img-5.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 6,
        img: "/images/treatment-result-img-6.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 7,
        img: "/images/treatment-result-img-7.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 8,
        img: "/images/treatment-result-img-8.jpg",
        alt: "Professor of Dermatology",
    },
    {
        id: 9,
        img: "/images/treatment-result-img-9.jpg",
        alt: "Professor of Dermatology",
    },
];

export default function TreatmentResult() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-6 md:mb-8 xl:mb-10 2xl:mb-12 max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <h2 className="text-dark self-stretch font-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-anton leading-[1.3] mb-4">
                        Current Position
                    </h2>
                    <p className="font-normal text-sm sm:text-base lg:text-xl 2xl:text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. ua.
                    </p>
                </div>

                {/* Certification card wrapper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Item */}
                    {treatmentData?.map((treatment) => (
                        <div
                            key={treatment?.id}
                            className="overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={treatment?.img}
                                alt={treatment?.alt}
                                width={470}
                                height={410}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
