export default function ContactForm() {
    return (
        <form action="#" method="POST" className="mx-auto  max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="col-span-1 sm:col-span-2">
                    <label
                        htmlFor="full-name"
                        className="block text-sm text-white font-bold mb-2"
                    >
                        Your name
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Your name"
                            className="block w-full h-12 md:h-[58px] border border-[#505050] rounded-xl bg-dark-4 p-4 text-sm text-dark font-normal placeholder:text-white/60 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <label
                        htmlFor="full-name"
                        className="block text-sm text-white font-bold mb-2"
                    >
                        E-Mail
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Enter your Email"
                            className="block w-full h-12 md:h-[58px] border border-[#505050] rounded-xl bg-dark-4 p-4 text-sm text-dark font-normal placeholder:text-white/60 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <label
                        htmlFor="full-name"
                        className="block text-sm text-white font-bold mb-2"
                    >
                        Mobile Number
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Enter Your Number"
                            className="block w-full h-12 md:h-[58px] border border-[#505050] rounded-xl bg-dark-4 p-4 text-sm text-dark font-normal placeholder:text-white/60 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <label
                        htmlFor="full-name"
                        className="block text-sm text-white font-bold mb-2"
                    >
                        Message
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            id="full-name"
                            name="full-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Type your message"
                            className="block w-full h-20 md:h-32 border border-[#505050] rounded-xl bg-dark-4 p-4 text-sm text-dark font-normal placeholder:text-white/60 focus:outline-none resize-none"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 ">
                <button className="text-sm md:text-base w-full justify-center font-semibold text-white py-2 lg:py-2.5 xl:py-3 px-4 md:px-5 lg:px-7 xl:px-8 rounded-full bg-light-accent flex items-center gap-1.5 md:gap-2 transition-colors hover:bg-accent-bg hover:text-light-foreground duration-200 group border border-light-accent h-12 lg:h-[58px] cursor-pointer">
                    Make An Appointment
                    <span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.476 9.16658L9.00601 4.69657L10.1845 3.51807L16.6663 9.99992L10.1845 16.4817L9.00601 15.3032L13.476 10.8332H3.33301V9.16658H13.476Z"
                                fill="white"
                                className="group-hover:fill-light-foreground duration-200 transition-colors"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    );
}
