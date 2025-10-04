import Image from "next/image";
import Link from "next/link";
import FillButton from "../Button/FillButton/FillButton";

const latestArticleData = [
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "Society for Healthcare & Research Development",
        excerpt:
            "Intradermal Immunoglobulin E (IgE) Injection in a Specific Interval With Emollient in the Control of Chronic Idiopathic Urticaria and Allergic Rhinitis",
        date: "6 Nov, 2023",
        category: "ARTICLES",
        author: "Pro. Dr. S M A Shamim",
        designation: "DOI:10.7759/cureus.48358",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "Annals of International Medical and Dental Research",
        excerpt:
            "Side Effects of Oral Valacyclovir and Oral Acyclovir in the Treatment of Herpes Zoster",
        date: "Nov-Dec 2022",
        category: "ARTICLES",
        author: "Pro. Dr. S M A Shamim",
        designation: "Vol. 8, Issue-6",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "International Journal of Research in Dermatology",
        excerpt:
            "Combination of systemic terbinafine (250 mg) twice daily and itraconazole (100 mg) twice in a pulse dose in resistant tinea infection",
        date: "March-April 2022",
        category: "ARTICLES",
        author: "Pro. Dr. S M A Shamim",
        designation: "Vol. 8, Issue-2",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
    {
        id: crypto.randomUUID(),
        img: "/images/article-featured-img.jpg",
        title: "National Library of Medicine",
        excerpt:
            '"Lockdown Dermatoses" during COVID-19-A Series of 127 Patients from the Indian Subcontinent',
        date: "28 Feb, 2022",
        category: "ARTICLES",
        author: "Pro. Dr. S M A Shamim",
        designation: "Vol. 20, Issue-1",
        authorImg: "/images/author-image.png",
        isSave: false,
    },
];

export default function LatestArticles() {
    return (
        <div className=" container py-12 md:py-16 xl:py-20 2xl:py-24  bg-white overflow-hidden">
            {/* Section Heading */}
            <div className="text-center mb-6 md:mb-8 xl:mb-10 2xl:mb-12 max-w-[720px] 2xl:max-w-[854px] mx-auto">
                <h2 className="text-dark self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton  leading-[1.3] mb-4">
                    ARTICLES
                </h2>
            </div>

            {/* Grid Articles */}
            <div className="grid grid-cols-4 gap-6">
                {latestArticleData?.map((article) => (
                    <div
                        key={article?.id}
                        className="flex flex-col col-span-1 bg-white rounded-xl border border-dark-5/30 p-1 transform-fill duration-300  shadow-[0px_24px_48px_0px_rgba(12,14,58,0.0)] hover:shadow-[0px_24px_48px_0px_rgba(12,14,58,0.15)] "
                    >
                        <div className="relative">
                            <Image
                                src={article?.img}
                                alt="Featured image"
                                width={340}
                                height={250}
                                className="w-full rounded-xl"
                            />

                            {/* Category Name */}
                            <span className=" absolute top-4 left-4 text-xs bg-white rounded-full px-3 py-1.5 text-light-foreground uppercase">
                                {article?.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="pt-5 px-4 pb-6">
                            {/* Date */}
                            <span className="inline-flex items-center gap-2 text-sm font-normal text-light-secondary mb-3">
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
                                {article?.date}
                            </span>

                            {/* Title */}
                            <Link href="/">
                                <h3 className="text-lg font-anton font-normal leading-[1.3] mb-3">
                                    {article?.title}
                                </h3>
                            </Link>
                            {/* Excerpt */}
                            <p className="text-sm text-light-foreground/60 font-normal font-plus-jakarta-sans">
                                {article?.excerpt}
                            </p>
                            {/* Divider */}
                            <div className="border-t border-dark-2/20 mt-4 mb-3"></div>

                            {/* Author box */}
                            <div className="flex items-center justify-between gap-6">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={article?.authorImg}
                                        alt="Author"
                                        width={30}
                                        height={30}
                                        className="w-9 h-9 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold font-plus-jakarta-sans text-light-foreground mb-1">
                                            {article?.author}
                                        </span>
                                        <span className="text-xs text-light-foreground/60">
                                            {article?.designation}
                                        </span>
                                    </div>
                                </div>

                                {/* Bookmark Button */}
                                <button className="w-9 h-9 rounded-full bg-dark-6 inline-flex justify-center items-center cursor-pointer group">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.33366 1.33398H12.667C13.0352 1.33398 13.3337 1.63246 13.3337 2.00065V14.7629C13.3337 14.9469 13.1844 15.0963 13.0003 15.0963C12.9377 15.0963 12.8763 15.0785 12.8233 15.0453L8.00033 12.0215L3.17739 15.0453C3.02141 15.1431 2.8157 15.0959 2.71791 14.9399C2.68464 14.8869 2.66699 14.8255 2.66699 14.7629V2.00065C2.66699 1.63246 2.96547 1.33398 3.33366 1.33398ZM12.0003 2.66732H4.00033V12.9556L8.00033 10.4478L12.0003 12.9556V2.66732Z"
                                            fill="black"
                                            className="transition-all duration-200 group-hover:fill-light-accent"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
                <FillButton text="See all" link="/" />
            </div>
        </div>
    );
}
