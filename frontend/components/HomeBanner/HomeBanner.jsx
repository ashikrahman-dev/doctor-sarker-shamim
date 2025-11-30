import { StrapiImage } from "../StrapiImage/StrapiImage";

export default function HomeBanner({ data }) {
    console.log("Home Banner Data:", data);
    return (
        <section className="bg-dark-8 pt-28 xl:pt-[180px] relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-[980px] before:h-full before:bg-[linear-gradient(270deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)] after:absolute after:content-[''] after:right-0 after:top-0 after:w-[980px] after:h-full after:bg-[linear-gradient(90deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)] overflow-hidden">
            <div className="container z-10 relative">
                <div className="text-center mb-6 md:mb-0">
                    <span className="inline-flex text-xs lg:text-sm font-medium tracking-[0.14px] leading-[1.42] text-light-foreground px-4 py-1.75 bg-sky-blue rounded-full mb-3">
                        {data?.tagline}
                    </span>
                    <h1 className="text-3xl 2xl:text-5xl text-light-foreground leading-[1.3] font-normal font-anton">
                        {data?.title}
                    </h1>
                </div>

                {/* Content box */}
                <div className="grid grid-cols-4 md:grid-cols-12 gap-6 items-end">
                    {/* Left */}
                    <div className="col-span-4 md:mb-28">
                        {/* Counter bos */}
                        <div className="flex gap-4 sm:gap-6">
                            <div className="w-full rounded-md md:rounded-2xl bg-white/35 text-center p-4">
                                <h3 className="text-xl md:text-2xl xl:text-3xl text-light-foreground font-anton leading-[1.4]">
                                    {data?.patient_served_number}
                                </h3>
                                <p className="text-light-foreground text-xs md:text-sm 2xl:text-base leading-[1.5]">
                                    {data?.patient_served_title}
                                </p>
                            </div>
                            <div className="w-full rounded-md md:rounded-2xl bg-white/35 text-center p-4">
                                <h3 className="text-xl md:text-2xl xl:text-3xl text-light-foreground font-anton leading-[1.4]">
                                    {data?.experience_years || "25"}+
                                </h3>
                                <p className="text-light-foreground text-xs md:text-sm 2xl:text-base leading-[1.5]">
                                    {data?.experience_title}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-light-foreground leading-[1.3] mt-5 md:my-7.5 text-center md:text-left">
                            {data?.short_description}
                        </p>
                    </div>
                    <div className="col-span-4">
                        <div className="md:-ms-8 xl:-ms-12 2xl:-ms-20 md:-me-8 xl:-me-12 2xl:-me-20">
                            <StrapiImage
                                src={data?.doctor_image?.url}
                                alt={
                                    data?.doctor_image?.alternativeText ||
                                    "Doctor Image"
                                }
                                width={623}
                                height={807}
                                className=""
                            />
                        </div>
                    </div>
                    <div className="col-span-4 absolute md:static bottom-0 md:bottom-auto w-full md:w-auto left-0 md:left-auto">
                        <div className="w-full md:rounded-2xl bg-white/35 p-4 md:py-9 md:px-6 backdrop-blur-[7px] md:mb-28">
                            <h3 className="text-base md:text-lg xl:text-xl text-light-foreground leading-[1.32] font-anton">
                                {data?.description}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
