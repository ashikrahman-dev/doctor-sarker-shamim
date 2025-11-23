export default function SingleBlogBanner({ data }) {
    const { sub_title, title, description, cta_url, cta_text, category } = data;

    console.log("Categories in SingleBlogBanner:", data);

    return (
        <section className="bg-dark-8 pt-[220px] pb-[100px] relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-[980px] before:h-full before:bg-[linear-gradient(270deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)] after:absolute after:content-[''] after:right-0 after:top-0 after:w-[980px] after:h-full after:bg-[linear-gradient(90deg,rgba(247,231,208,0)_22.87%,#FFE4C2_62.4%)]">
            <div className="container z-10 relative">
                <div className="text-center flex flex-col items-center">
                    <p className="mb-4.5 bg-accent-bg inline-block px-3 rounded-full capitalize font-medium">
                        {category.toLowerCase()}
                    </p>

                    <span className="inline-flex text-xs lg:text-sm font-medium tracking-[0.14px] leading-[1.42] text-light-foreground px-4 py-1.75 bg-sky-blue rounded-full mb-4 gap-2">
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.0013 0.833984V2.50065H13.0013V0.833984H14.668V2.50065H18.0013C18.4616 2.50065 18.8346 2.87375 18.8346 3.33398V16.6673C18.8346 17.1276 18.4616 17.5007 18.0013 17.5007H3.0013C2.54107 17.5007 2.16797 17.1276 2.16797 16.6673V3.33398C2.16797 2.87375 2.54107 2.50065 3.0013 2.50065H6.33464V0.833984H8.0013ZM17.168 9.16732H3.83464V15.834H17.168V9.16732ZM6.33464 4.16732H3.83464V7.50065H17.168V4.16732H14.668V5.83398H13.0013V4.16732H8.0013V5.83398H6.33464V4.16732Z"
                                fill="#060C22"
                            />
                        </svg>
                        {sub_title}
                    </span>
                    <h1 className="text-2xl xl:text-3xl 2xl:text-5xl text-light-foreground leading-[1.3] font-normal font-anton">
                        {title}
                    </h1>
                    <p className="text-base xl:text-xl text-light-foreground/70 leading-[1.5] mt-4 max-w-[810px] mx-auto">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
