export default function SubpageBanner({ data }) {
    const { sub_title, title, description, cta_url, cta_text } = data || {
        sub_title: "Gallery",
        title: "Gallery",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cta_url: "/gallery",
        cta_text: "Get in Touch",
    };

    return (
        <section className="bg-dark-8 pt-[180px] pb-16 md:pb-20 xl:pb-24 relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-[980px] before:h-full before:bg-[linear-gradient(270deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)] after:absolute after:content-[''] after:right-0 after:top-0 after:w-[980px] after:h-full after:bg-[linear-gradient(90deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)]">
            <div className="container z-10 relative">
                <div className="text-center">
                    <span className="inline-flex text-xs lg:text-sm font-medium tracking-[0.14px] leading-[1.42] text-light-foreground px-4 py-1.75 bg-sky-blue rounded-full mb-3">
                        {sub_title}
                    </span>
                    <h1 className="text-4xl xl:text-5xl 2xl:text-7xl text-light-foreground leading-[1.3] font-normal font-anton">
                        {title}
                    </h1>

                    {/* <p className="text-lg xl:text-xl 2xl:text-2xl text-light-foreground/70 leading-[1.3] mt-4 max-w-[810px] mx-auto">
                        {description}
                    </p> */}
                </div>
            </div>
        </section>
    );
}
