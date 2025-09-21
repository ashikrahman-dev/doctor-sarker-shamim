import Image from "next/image";

const awardsData = [
    {
        id: 1,
        awardImg: "/images/awards-img-1.svg",
        awardName: "BLIND DATING WITH FILLERS",
        awardDate: "2019",
    },
    {
        id: 2,
        awardImg: "/images/awards-img-2.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2012",
    },
    {
        id: 3,
        awardImg: "/images/awards-img-3.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2011/2012",
    },
    {
        id: 4,
        awardImg: "/images/awards-img-4.svg",
        awardName: "BUSINESS AWARD",
        awardDate: "2009/2010",
    },
    {
        id: 5,
        awardImg: "/images/awards-img-5.svg",
        awardName: "HEALTH AWARD",
        awardDate: "2009/2010",
    },
    {
        id: 6,
        awardImg: "/images/awards-img-6.svg",
        awardName: "SPECIAL AWARD",
        awardDate: "2008",
    },
];

export default function Awards() {
    return (
        <div className="py-12 md:py-16 xl:py-20 2xl:py-24  overflow-hidden bg-accent-bg">
            <div className="container">
                {/* Section Heading */}
                <div className="text-center max-w-[720px] 2xl:max-w-[854px] mx-auto">
                    <div className="text-dark self-stretch font-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-[54px] font-anton leading-[1.3] mb-4">
                        My awards
                    </div>
                    <p className="font-normal text-sm sm:text-base lg:text-xl 2xl:text-2xl text-dark/70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>

                {/* Awards Card */}
                <div className="pt-6 lg:pt-8 xl:pt-10 2xl:pt-12 grid grid-cols-6 gap-6">
                    {awardsData?.map((award) => (
                        <div
                            key={award?.id}
                            className="p-4 col-span-1 bg-white rounded-2xl flex flex-col  items-center h-full"
                        >
                            <Image
                                src={award?.awardImg}
                                alt="award image"
                                width={70}
                                height={70}
                                className="w-[70px] h-[70px] rounded-lg "
                            />

                            <h3 className="font-normal text-lg text-light-foreground font-anton py-3">
                                {award?.awardName}
                            </h3>
                            <p className="font-normal text-sm text-light-secondary flex items-center gap-2">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.50033 0.833984V2.50065H12.5003V0.833984H14.167V2.50065H17.5003C17.9606 2.50065 18.3337 2.87375 18.3337 3.33398V16.6673C18.3337 17.1276 17.9606 17.5007 17.5003 17.5007H2.50033C2.04009 17.5007 1.66699 17.1276 1.66699 16.6673V3.33398C1.66699 2.87375 2.04009 2.50065 2.50033 2.50065H5.83366V0.833984H7.50033ZM16.667 9.16732H3.33366V15.834H16.667V9.16732ZM5.83366 4.16732H3.33366V7.50065H16.667V4.16732H14.167V5.83398H12.5003V4.16732H7.50033V5.83398H5.83366V4.16732Z"
                                        fill="#FF6D00"
                                    />
                                </svg>

                                {award?.awardDate}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
