import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-[linear-gradient(180deg,rgba(38,47,77,1)_0%,rgba(14,20,42,1)_100%)] pt-24 overflow-hidden">
            <div className="container">
                <div className="inline-flex items-start gap-[103px]">
                    <Image
                        src="/images/footer-logo.svg"
                        alt="Footer logo"
                        width={52}
                        height={51}
                        className="w-full max-w-[52px]"
                    />

                    <div className="flex w-[1220px] items-start justify-between relative">
                        <div className="flex w-[180px] gap-6 flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm tracking-[1.96px] leading-6 whitespace-nowrap">
                                SUPPORT
                            </div>

                            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-lg tracking-[0] leading-7 underline whitespace-nowrap">
                                    Services
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    About us
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Contact Us
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[180px] gap-6 flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm tracking-[1.96px] leading-6 whitespace-nowrap">
                                SERVICES
                            </div>

                            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Botox &amp; Filler
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Body Shaping
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Hair Reduction
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    DHI
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[180px] gap-6 flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm tracking-[1.96px] leading-6 whitespace-nowrap">
                                COMPANY
                            </div>

                            <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    FAQ
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Terms &amp; Conditions
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Blog
                                </div>

                                <div className="relative w-fit opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Advice
                                </div>
                            </div>
                        </div>

                        <div className="flex w-[180px] gap-6 flex-col items-start relative">
                            <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-sm tracking-[1.96px] leading-6 whitespace-nowrap">
                                SOCIAL
                            </div>

                            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]">
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
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-start gap-[30px] mt-16 mb-12">
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
                                    className="text-lg font-medium text-white leading-[1.15] transition-colors duration-200 ease-in-out hover:text-light-accent"
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

                                <p className="text-lg font-medium text-white leading-[1.35] ">
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
                                    className="text-lg font-medium text-white leading-[1.15] transition-colors duration-200 ease-in-out hover:text-light-accent"
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
