"use client";

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select";
import { appointmentFormAction } from "@/utils/appointmentAction";
import { AnimatePresence, motion } from "framer-motion";
import { useActionState, useEffect, useRef } from "react";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: null,
};

export default function AppointmentPopup({ isOpen, onClose }) {
    const formRef = useRef(null);
    const [formState, formAction, isPending] = useActionState(
        appointmentFormAction,
        INITIAL_STATE
    );

    // Success message এর জন্য auto close এবং reset
    useEffect(() => {
        if (formState?.successMessage) {
            const timer = setTimeout(() => {
                // Form reset করো
                if (formRef.current) {
                    formRef.current.reset();
                }
                // Modal close করো
                onClose();
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        }
    }, [formState?.successMessage, onClose]);

    // Modal close হলে form reset করো
    useEffect(() => {
        if (!isOpen && formRef.current) {
            formRef.current.reset();
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl shadow-xl w-full max-w-[946px] px-4 py-6 md:p-12 relative"
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
                            className="absolute top-4 right-4 md:-top-4 md:-right-4 w-10 h-10 flex items-center justify-center bg-light-foreground hover:bg-light-foreground/90 rounded-full transition-colors duration-200 cursor-pointer z-10"
                            type="button"
                            aria-label="Close"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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

                            {/* Success Message */}
                            {formState?.successMessage && (
                                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    {formState.successMessage}
                                </div>
                            )}

                            {/* General Error Message */}
                            {formState?.errorMessage && (
                                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    {formState.errorMessage}
                                </div>
                            )}

                            <form
                                ref={formRef}
                                action={formAction}
                                className="flex flex-col mx-auto"
                            >
                                <div className="grid grid-cols-1 gap-3 md:gap-x-8 md:gap-y-6 sm:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="full-name"
                                            className={`flex text-xs md:text-sm font-semibold mb-2 ${
                                                formState?.zodErrors?.name
                                                    ? "text-red-500"
                                                    : "text-dark"
                                            }`}
                                        >
                                            Your name
                                        </label>
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            placeholder="Your name"
                                            className={`block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none ${
                                                formState?.zodErrors?.name
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {formState?.zodErrors?.name && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {formState.zodErrors.name[0]}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={`flex text-xs md:text-sm font-semibold mb-2 ${
                                                formState?.zodErrors?.email
                                                    ? "text-red-500"
                                                    : "text-dark"
                                            }`}
                                        >
                                            Your email address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Your email address"
                                            className={`block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 focus:outline-none ${
                                                formState?.zodErrors?.email
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                        {formState?.zodErrors?.email && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {formState.zodErrors.email[0]}
                                            </p>
                                        )}
                                    </div>

                                    {/* Select Service */}
                                    <div>
                                        <label
                                            htmlFor="service"
                                            className={`flex text-xs md:text-sm font-semibold mb-2 ${
                                                formState?.zodErrors?.service
                                                    ? "text-red-500"
                                                    : "text-dark"
                                            }`}
                                        >
                                            Select Service
                                        </label>
                                        <NativeSelect
                                            name="service"
                                            id="service"
                                            className={`block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 ${
                                                formState?.zodErrors?.service
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        >
                                            <NativeSelectOption value="">
                                                Select Service
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Hydra Facial">
                                                Hydra Facial
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Botox & Fillers">
                                                Botox & Fillers
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Body Shaping">
                                                Body Shaping
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Hair Reduction">
                                                Hair Reduction
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Laser Procedures">
                                                Laser Procedures
                                            </NativeSelectOption>
                                        </NativeSelect>
                                        {formState?.zodErrors?.service && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {formState.zodErrors.service[0]}
                                            </p>
                                        )}
                                    </div>

                                    {/* Specialist */}
                                    <div>
                                        <label
                                            htmlFor="specialist"
                                            className={`flex text-xs md:text-sm font-semibold mb-2 ${
                                                formState?.zodErrors?.consultant
                                                    ? "text-red-500"
                                                    : "text-dark"
                                            }`}
                                        >
                                            Select Specialist
                                        </label>
                                        <NativeSelect
                                            name="specialist"
                                            id="specialist"
                                            className={`block w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark placeholder:text-dark/50 ${
                                                formState?.zodErrors?.consultant
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        >
                                            <NativeSelectOption value="">
                                                Select Specialist
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Shamim">
                                                Shamim
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Monir">
                                                Monir
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Shamima">
                                                Shamima
                                            </NativeSelectOption>
                                            <NativeSelectOption value="Dr-Arif">
                                                Dr. Arif
                                            </NativeSelectOption>
                                        </NativeSelect>
                                        {formState?.zodErrors?.consultant && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {
                                                    formState.zodErrors
                                                        .consultant[0]
                                                }
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Number Field */}
                                    <div>
                                        <label
                                            htmlFor="phone-number"
                                            className={`block text-xs md:text-sm font-semibold text-start mb-2 ${
                                                formState?.zodErrors?.phone
                                                    ? "text-red-500"
                                                    : "text-dark"
                                            }`}
                                        >
                                            Mobile Number
                                        </label>
                                        <div className="mt-2.5">
                                            <div className="flex rounded-md bg-dark-7 ">
                                                <input
                                                    id="phone-number"
                                                    name="phone-number"
                                                    type="text"
                                                    placeholder="+8801234567890"
                                                    pattern="^\+?[0-9]+$"
                                                    title="Only numbers and + sign at the beginning are allowed"
                                                    onInput={(e) => {
                                                        let value =
                                                            e.target.value;
                                                        if (
                                                            value.startsWith(
                                                                "+"
                                                            )
                                                        ) {
                                                            value =
                                                                "+" +
                                                                value
                                                                    .slice(1)
                                                                    .replace(
                                                                        /[^0-9]/g,
                                                                        ""
                                                                    );
                                                        } else {
                                                            value =
                                                                value.replace(
                                                                    /[^0-9]/g,
                                                                    ""
                                                                );
                                                        }
                                                        e.target.value = value;
                                                    }}
                                                    className={`block min-w-0 grow w-full h-10 sm:h-12 md:h-[58px] rounded-md md:rounded-lg bg-dark-7 p-3 md:p-4 text-sm md:text-base text-dark font-medium placeholder:text-dark/50 focus:outline-none ${
                                                        formState?.zodErrors
                                                            ?.phone
                                                            ? "border-2 border-red-500 placeholder:text-red-400"
                                                            : ""
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                        {formState?.zodErrors?.phone && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {formState.zodErrors.phone[0]}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-6 mt-4 md:mt-8">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="bg-light-accent rounded-full py-3 lg:py-4 px-5 lg:px-8 text-light-foreground text-sm lg:text-base font-semibold leading-[1.2] lg:h-[58px] inline-flex gap-2 items-center group transition-colors duration-300 hover:bg-accent-bg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPending ? (
                                            <>
                                                <span>Submitting...</span>
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            </>
                                        ) : (
                                            <>
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
                                            </>
                                        )}
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
