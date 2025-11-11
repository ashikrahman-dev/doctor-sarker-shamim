"use client";

import { DatePickerField } from "@/components/Form/DatePickerField/DatePickerField";
import { AnimatePresence, motion } from "framer-motion";

export default function AppointmentPopup({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl w-[90%] max-w-[946px] px-4 py-6 md:p-12 relative"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-8 md:-top-0 right-0 md:-right-8 text-gray-500 hover:text-black cursor-pointer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5859 12.0001L2.79297 4.20718L4.20718 2.79297L12.0001 10.5858L19.793 2.79297L21.2072 4.20718L13.4143 12.0001L21.2072 19.7929L19.793 21.2072L12.0001 13.4143L4.20718 21.2072L2.79297 19.7929L10.5859 12.0001Z"
                                    fill="white"
                                />
                            </svg>
                        </button>

                        <div className="text-center">
                            <span className="text-[10px] md:text-xs xl:text-sm font-medium tracking-[0.14px] leading-[1.42] text-light-foreground px-2 md:px-4 py-1 md:py-1.75 bg-sky-blue rounded-full mb-3 hidden md:inline-flex">
                                Transforming Lives, Redefining Beauty
                            </span>
                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] font-anton text-light-foreground leading-[1.2] max-w-[580px] mx-auto text-center pt-1 pb-4">
                                Share the love. <br /> Make an appointments
                            </h2>
                            <p className="text-light-foreground/70 text-sm md:text-base 2xl:text-xl text-center mb-4 md:mb-6 hidden md:block">
                                Please complete this form with all the required
                                information.
                            </p>

                            <form className="flex flex-col mx-auto">
                                <div className="grid grid-cols-1 gap-3 md:gap-x-8 md:gap-y-6 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="full-name"
                                            className="flex text-xs md:text-sm text-dark font-semibold mb-2"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            placeholder="Your name"
                                            className="block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex text-xs md:text-sm text-dark font-semibold mb-2"
                                        >
                                            Your email address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email address"
                                            className="block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label
                                            htmlFor="phone-number"
                                            className="flex text-xs md:text-sm text-dark font-semibold mb-2"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            id="phone-number"
                                            name="phone-number"
                                            type="text"
                                            placeholder="123-456-7890"
                                            className="block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none"
                                        />
                                    </div>

                                    {/* Date Picker */}
                                    <div>
                                        <DatePickerField />
                                    </div>

                                    {/* Message */}
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="message"
                                            className="flex text-xs md:text-sm text-dark font-semibold mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Type Here"
                                            className="block w-full h-20 md:h-36 rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-6 mt-4 md:mt-8">
                                    <button
                                        type="submit"
                                        className="bg-light-accent rounded-full py-3 lg:py-4 px-5 lg:px-8 text-light-foreground text-sm lg:text-base font-semibold leading-[1.2] lg:h-[58px] inline-flex gap-2 items-center group transition-colors duration-300 hover:bg-accent-bg cursor-pointer"
                                    >
                                        Make An Appointment
                                        <svg
                                            width="21"
                                            height="20"
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13.976 9.16609L9.50601 4.69609L10.6845 3.51758L17.1663 9.99943L10.6845 16.4812L9.50601 15.3027L13.976 10.8328H3.83301V9.16609H13.976Z"
                                                fill="#060C22"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
