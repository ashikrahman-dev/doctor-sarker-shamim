import Image from "next/image";
import Link from "next/link";

const footerMenus = [
    {
        id: 1,
        title: "Support",
        links: [
            { id: 1, name: "Services", url: "/" },
            { id: 2, name: "About us", url: "about" },
            { id: 3, name: "Contact Us", url: "contact" },
        ],
    },
    {
        id: 2,
        title: "Services",
        links: [
            { id: 1, name: "Botox & Filler", url: "/" },
            { id: 2, name: "Body Shaping", url: "/" },
            { id: 3, name: "Body Shaping", url: "/" },
            { id: 4, name: "DHI", url: "/" },
        ],
    },
    {
        id: 3,
        title: "Company",
        links: [
            { id: 1, name: "FAQ", url: "/" },
            { id: 2, name: "Terms & Conditions", url: "/" },
            { id: 3, name: "News", url: "/news" },
            { id: 4, name: "Gallery", url: "/gallery" },
        ],
    },
];

export default function Footer() {
    return (
        <div className="bg-[linear-gradient(180deg,rgba(38,47,77,1)_0%,rgba(14,20,42,1)_100%)] pt-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap xl:flex-nowrap items-start gap-6 xl:gap-[103px]">
                    <Link href="/" className="w-full max-w-16 xl:max-w-[100px] 2xl:max-w-[148px]">
                        <Image
                            src="/images/footer-logo.svg"
                            alt="Footer logo"
                            width={52}
                            height={51}
                            className="w-full max-w-[52px]"
                        />
                    </Link>

                    <div className="flex flex-wrap xl:flex-nowrap gap-8 xl:gap-10 justify-between w-full">
                        {footerMenus?.map((menu) => (
                            <div key={menu?.id} className="w-[48%] lg:w-full">
                                <h4 className="text-sm uppercase text-white/50 font-extrabold tracking-[1.96px] leading-[1.71] mb-6">
                                    {menu?.title}
                                </h4>
                                <ul>
                                    {menu?.links?.map((link) => (
                                        <li key={link?.id} className="mb-4">
                                            <Link
                                                href={link?.url}
                                                className="text-lg font-normal text-white/60 leading-[1.15] transition-colors duration-200 ease-in-out hover:text-white"
                                            >
                                                {link?.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="w-full">
                            <h4 className="text-sm uppercase text-white/50 font-extrabold tracking-[1.96px] leading-[1.71] mb-6">
                                Social
                            </h4>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        href=""
                                        className="text-lg font-normal text-white/60 leading-[1.15] transition-colors duration-200 ease-in-out hover:text-white flex items-center gap-2"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mt-0.5"
                                        >
                                            <path
                                                d="M18 10.0567C18 5.61142 14.4183 2.00781 10 2.00781C5.58172 2.00781 2 5.61142 2 10.0567C2 14.0741 4.92547 17.404 8.75 18.0078V12.3833H6.71875V10.0567H8.75V8.28343C8.75 6.26618 9.94438 5.15191 11.7717 5.15191C12.6467 5.15191 13.5625 5.30912 13.5625 5.30912V7.2899H12.5538C11.56 7.2899 11.25 7.91038 11.25 8.54754V10.0567H13.4688L13.1141 12.3833H11.25V18.0078C15.0745 17.404 18 14.0741 18 10.0567Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Facebook
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href=""
                                        className="text-lg font-normal text-white/60 leading-[1.15] transition-colors duration-200 ease-in-out hover:text-white flex items-center gap-2"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            className="mt-0.5"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.99883 3.43862C12.1392 3.43862 12.3926 3.44801 13.2343 3.48556C14.0166 3.51998 14.4391 3.6514 14.7207 3.76092C15.093 3.90486 15.3621 4.08009 15.6406 4.35858C15.9223 4.6402 16.0944 4.90618 16.2383 5.27854C16.3478 5.56016 16.4792 5.98572 16.5137 6.76487C16.5512 7.60974 16.5606 7.8632 16.5606 10.0004C16.5606 12.1407 16.5512 12.3942 16.5137 13.2359C16.4792 14.0182 16.3478 14.4406 16.2383 14.7222C16.0944 15.0946 15.9191 15.3637 15.6406 15.6422C15.359 15.9238 15.093 16.0959 14.7207 16.2399C14.4391 16.3494 14.0135 16.4808 13.2343 16.5152C12.3895 16.5528 12.136 16.5622 9.99883 16.5622C7.85851 16.5622 7.60506 16.5528 6.76332 16.5152C5.98104 16.4808 5.55861 16.3494 5.27699 16.2399C4.90462 16.0959 4.63552 15.9207 4.35703 15.6422C4.07541 15.3606 3.9033 15.0946 3.75936 14.7222C3.64984 14.4406 3.51842 14.015 3.484 13.2359C3.44645 12.391 3.43706 12.1376 3.43706 10.0004C3.43706 7.86007 3.44645 7.60661 3.484 6.76487C3.51842 5.98259 3.64984 5.56016 3.75936 5.27854C3.9033 4.90618 4.07853 4.63707 4.35703 4.35858C4.63865 4.07696 4.90462 3.90486 5.27699 3.76092C5.55861 3.6514 5.98417 3.51998 6.76332 3.48556C7.60506 3.44801 7.85851 3.43862 9.99883 3.43862ZM9.99883 1.99609C7.82409 1.99609 7.55186 2.00548 6.69761 2.04303C5.84649 2.08058 5.26134 2.21826 4.75443 2.4154C4.2256 2.62192 3.77814 2.89415 3.3338 3.34162C2.88634 3.78595 2.61411 4.23342 2.40758 4.75911C2.21045 5.26916 2.07277 5.85117 2.03522 6.70229C1.99767 7.55967 1.98828 7.83191 1.98828 10.0066C1.98828 12.1814 1.99767 12.4536 2.03522 13.3079C2.07277 14.159 2.21045 14.7441 2.40758 15.2511C2.61411 15.7799 2.88634 16.2273 3.3338 16.6717C3.77814 17.116 4.2256 17.3914 4.7513 17.5948C5.26134 17.7919 5.84336 17.9296 6.69448 17.9671C7.54873 18.0047 7.82096 18.0141 9.9957 18.0141C12.1704 18.0141 12.4427 18.0047 13.2969 17.9671C14.148 17.9296 14.7332 17.7919 15.2401 17.5948C15.7658 17.3914 16.2133 17.116 16.6576 16.6717C17.1019 16.2273 17.3773 15.7799 17.5807 15.2542C17.7778 14.7441 17.9155 14.1621 17.9531 13.311C17.9906 12.4567 18 12.1845 18 10.0098C18 7.83503 17.9906 7.5628 17.9531 6.70855C17.9155 5.85743 17.7778 5.27228 17.5807 4.76537C17.3836 4.23342 17.1113 3.78595 16.6639 3.34162C16.2195 2.89728 15.7721 2.62192 15.2464 2.41853C14.7363 2.22139 14.1543 2.08371 13.3032 2.04616C12.4458 2.00548 12.1736 1.99609 9.99883 1.99609Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M9.99761 5.89062C7.72587 5.89062 5.88281 7.73368 5.88281 10.0054C5.88281 12.2772 7.72587 14.1202 9.99761 14.1202C12.2693 14.1202 14.1124 12.2772 14.1124 10.0054C14.1124 7.73368 12.2693 5.89062 9.99761 5.89062ZM9.99761 12.6746C8.52379 12.6746 7.32847 11.4792 7.32847 10.0054C7.32847 8.5316 8.52379 7.33628 9.99761 7.33628C11.4714 7.33628 12.6667 8.5316 12.6667 10.0054C12.6667 11.4792 11.4714 12.6746 9.99761 12.6746Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.2377 5.73017C15.2377 6.26212 14.8059 6.69081 14.277 6.69081C13.7451 6.69081 13.3164 6.25899 13.3164 5.73017C13.3164 5.19822 13.7482 4.76953 14.277 4.76953C14.8059 4.76953 15.2377 5.20135 15.2377 5.73017Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href=""
                                        className="text-lg font-normal text-white/60 leading-[1.15] transition-colors duration-200 ease-in-out hover:text-white flex items-center gap-2"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mt-0.5"
                                        >
                                            <path
                                                d="M19.8008 6.00781C19.8008 6.00781 19.6055 4.62891 19.0039 4.02344C18.2422 3.22656 17.3906 3.22266 17 3.17578C14.2031 2.97266 10.0039 2.97266 10.0039 2.97266H9.99609C9.99609 2.97266 5.79688 2.97266 3 3.17578C2.60938 3.22266 1.75781 3.22656 0.996094 4.02344C0.394531 4.62891 0.203125 6.00781 0.203125 6.00781C0.203125 6.00781 0 7.62891 0 9.24609V10.7617C0 12.3789 0.199219 14 0.199219 14C0.199219 14 0.394531 15.3789 0.992187 15.9844C1.75391 16.7813 2.75391 16.7539 3.19922 16.8398C4.80078 16.9922 10 17.0391 10 17.0391C10 17.0391 14.2031 17.0313 17 16.832C17.3906 16.7852 18.2422 16.7813 19.0039 15.9844C19.6055 15.3789 19.8008 14 19.8008 14C19.8008 14 20 12.3828 20 10.7617V9.24609C20 7.62891 19.8008 6.00781 19.8008 6.00781ZM7.93359 12.6016V6.98047L13.3359 9.80078L7.93359 12.6016Z"
                                                fill="white"
                                            />
                                        </svg>
                                        Youtube
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="flex gap-6 flex-col items-start ">
                            <div className=" font-extrabold text-white text-sm tracking-[1.96px] leading-6 whitespace-nowrap">
                                SOCIAL
                            </div>

                            <div className="inline-flex flex-col items-start gap-[15px] ">
                                <div className="inline-flex items-center gap-[7px] ">
                                    <img
                                        className="relative w-5 h-5"
                                        alt="Facebook negative"
                                        src="https://c.animaapp.com/mf3repmz3M9ECb/img/facebook---negative.svg"
                                    />

                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                        Facebook
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt="Instagram negative"
                                        src="https://c.animaapp.com/mf3repmz3M9ECb/img/instagram---negative.svg"
                                    />

                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                        Instagram
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt="Social icons"
                                        src="https://c.animaapp.com/mf3repmz3M9ECb/img/social-icons.svg"
                                    />

                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                        Youtube
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-[30px] mt-16 mb-12">
                    <div className="bg-white/5 rounded-full border-2 border-white/10 px-8 py-4 min-h-[118px] flex items-center">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/images/email-icon.svg"
                                alt="Email"
                                width={30}
                                height={30}
                            />

                            <div className="">
                                <div className="text-base font-medium text-white/60 leading-[1.62] font-plus-jakarta-sans mb-1">
                                    Email
                                </div>

                                <Link
                                    href="mailto:feedback@lasertreat.com.bd"
                                    className="text-base font-medium text-white leading-[1.15] transition-colors duration-200 ease-in-out hover:text-light-accent"
                                >
                                    feedback@lasertreat.com.bd
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-full border-2 border-white/10 px-8 py-4 min-h-[118px] flex items-center">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/images/address-icon.svg"
                                alt="Email"
                                width={30}
                                height={30}
                            />

                            <div className="">
                                <div className="text-base font-medium text-white/60 leading-[1.62] font-plus-jakarta-sans mb-1">
                                    Address
                                </div>

                                <p className="text-base font-medium text-white leading-[1.35] ">
                                    {`House: 56 (3rd Floor, The Laureate, Road: 11 Block: F,
                                            Dhaka 1213`}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-full border-2 border-white/10 px-8 py-4 min-h-[118px] flex items-center">
                        <div className="flex items-center gap-6">
                            <Image
                                src="/images/phone-icon.svg"
                                alt="Email"
                                width={30}
                                height={30}
                            />

                            <div className="">
                                <div className="text-base font-medium text-white/60 leading-[1.62] font-plus-jakarta-sans mb-1">
                                    Email
                                </div>

                                <Link
                                    href="tel:+8801762817152"
                                    className="text-base font-medium text-white leading-[1.15] transition-colors duration-200 ease-in-out hover:text-light-accent"
                                >
                                    +88 01762817152
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="opacity-50 font-normal text-center text-white text-xs tracking-[2.40px] leading-6 whitespace-nowrap py-4 border-t border-white/20">
                    © 2025 DR. PROFESSOR DR. SARKER MAHBUB AHMED SHAMIM
                </p>
            </div>
        </div>
    );
}
