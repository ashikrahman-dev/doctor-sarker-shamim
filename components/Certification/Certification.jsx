import Image from "next/image";

const certificationData = [
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "Society for Healthcare & Research Development",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus erat vel erat dictum, at accumsan dui ornare.",
        date: "London, 2018",
        author: "John Doe",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "Society for Healthcare & Research Development",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus erat vel erat dictum, at accumsan dui ornare.",
        date: "London, 2018",
        author: "John Doe",
    },
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "Society for Healthcare & Research Development",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus erat vel erat dictum, at accumsan dui ornare.",
        date: "London, 2018",
        author: "John Doe",
    },
];

export default function Certification() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-8 overflow-hidden">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center mb-12 max-w-[854px] mx-auto">
                    <div className="text-dark self-stretch font-normal text-[54px] font-anton leading-[1.3] mb-4">
                        Certification
                    </div>
                    <p className="font-normal text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. ua.
                    </p>
                </div>

                {/* Certification card wrapper */}
                <div className="flex flex-col gap-6">
                    {/* Certification card */}
                    {certificationData?.map((certification) => (
                        <div key={certification?.id} className="p-2.5 bg-white rounded-3xl shadow-[0px_24px_48px_0px_rgba(12,14,58,0.04)] grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-4">
                                <Image
                                    src="/images/certification-placeholder-img.svg"
                                    alt="certification image"
                                    width={440}
                                    height={280}
                                    className="w-full rounded-3xl"
                                />
                            </div>
                            <div className="col-span-8">
                                {/* Content */}
                                <div className="p-6">
                                    {/* Location & Date */}
                                    <span className="bg-sky-blue py-1.5 px-4 text-light-foreground rounded-full text-sm leading-[1.42] tracking-[0.14px] mb-4 inline-flex">
                                        London, 2018
                                    </span>
                                    {/* Title */}
                                    <h2 className="text-4xl text-light-foreground font-anton leading-[1.3] font-normal mb-5">
                                        American Society of Plastic Surgeons
                                    </h2>
                                    <p className="font-normal text-2xl text-dark/70">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse dapibus
                                        erat vel erat dictum, at accumsan dui
                                        ornare.
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
