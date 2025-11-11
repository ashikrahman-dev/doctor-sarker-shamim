import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm/ContactForm";

const contactInfo = [
    {
        id: 1,
        icon: "/images/phone-call.svg",
        title: "Phone",
        info: "+41911234567",
        link: "tel:+41911234567",
    },
    {
        id: 2,
        icon: "/images/envelope.svg",
        title: "Email",
        info: "info@acquathermic.ch",
        link: "mailto:info@acquathermic.ch",
    },
    {
        id: 3,
        icon: "/images/printer.svg",
        title: "Fax",
        info: "+41 91 123 45 67",
        
    },
    ,
    {
        id: 4,
        icon: "/images/map.svg",
        title: "Location",
        info: "Via Vergiò 29, 6932 Breganzona",
    },
];

export default function ContactSection() {
    return (
        <section className="py-12 md:py-16 xl:py-20 2xl:py-24 bg-dark-8">
            {/* Map */}
            <div className="container">
                {/* Get In Touch -start */}
                <div className="rounded-4xl bg-white grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[30px] lg:min-h-[500px] 2xl:min-h-[650px]">
                    <div className="px-8 lg:px-10 xl:px-24 py-8 lg:py-10 2xl:py-[100px] max-w-[700px] bg-gradient-to-r from-white to-[#ffffff31] rounded-4xl">
                        <div className="text-light-foreground self-stretch font-normal text-2xl lg:text-3xl xl:text-4xl font-anton  leading-[1.3] mb-4">
                            Contact Us
                        </div>
                        <p className="font-normal text-sm sm:text-base text-light-foreground/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.078900191987!2d90.4280389761793!3d23.764747520350838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7005c8f7709%3A0xaef129fd4b082aff!2sCARBARN%20BANGLADESH!5e0!3m2!1sen!2sbd!4v1734087856687!5m2!1sen!2sbd"
                            style={{
                                width: "100%",
                                border: "0",
                                borderRadius: "16px",
                                overflow: "hidden",
                                outline: "none",
                            }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-[340px] lg:h-[500px]"
                        ></iframe>
                    </div>
                </div>
                {/* Get In Touch -end */}

                {/* Contact Form */}
                <div className="grid grid-cols-12 gap-6 mt-12 md:-mt-16 lg:-mt-[287px]">
                    <div className="col-span-12 md:col-span-10 md:col-start-2 bg-[#26292A] px-6 py-8  sm:p-8 md:p-10 rounded-2xl lg:rounded-3xl 2xl:rounded-4xl">
                        <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-7.5">
                            <div className="w-full">
                                <div className="text-white self-stretch font-normal text-2xl lg:texttext-[30px] font-anton leading-[1.3] mb-5">
                                    Contact Us
                                </div>
                                <p className="font-normal text-sm sm:text-base text-[#7B7B7B] mb-10">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="grid gap-2.5">
                                    {contactInfo?.map((item) => (
                                        <div
                                            key={item?.id}
                                            className="bg-white/5 rounded-xl p-2 flex gap-5 items-center"
                                        >
                                            {/* Icon */}
                                            <div className="w-16 lg:w-21 h-16 lg:h-21">
                                                <div className="w-16 lg:w-21 h-16 lg:h-21 rounded-lg bg-white/7 flex items-center justify-center">
                                                    <Image
                                                        src={item?.icon}
                                                        alt={item?.title}
                                                        width={24}
                                                        height={24}
                                                        className="w-5 lg:w-6 h-5 lg:h-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full ">
                                                <p className="text-[#CBCBCB]/70 text-sm font-normal leading-[1.57] tracking-[0.07] mb-1">
                                                    {item?.title}
                                                </p>
                                                <Link
                                                    href={item?.link ? item?.link : "#"}
                                                    className="text-white/90 text-sm sm:text-base md:text-lg font-medium tracking-[0.09]"
                                                >
                                                    {item?.info}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="w-full">
                                <div className="text-white self-stretch font-normal text-2xl lg:texttext-[30px] font-anton leading-[1.3] mb-5">
                                    Send Me Message
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
