"use server";

import { appointmentFormService } from "@/data/services";
import z from "zod";

const appointmentFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    phone: z
        .string()
        .min(10, {
            message: "Phone number must be at least 10 characters",
        })
        .regex(/^\+?[0-9]+$/, {
            message:
                "Phone number can only contain numbers and + sign at the beginning",
        }),
    service: z.string().min(1, {
        message: "Please select a service",
    }),
    consultant: z.string().min(1, {
        message: "Please select a specialist",
    }),
});

export async function appointmentFormAction(prevState, formData) {
    const name = formData.get("full-name");
    const email = formData.get("email");
    const phone = formData.get("phone-number");
    const service = formData.get("service");
    const consultant = formData.get("specialist");

    const validatedFields = appointmentFormSchema.safeParse({
        name,
        email,
        phone,
        service,
        consultant,
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            errorMessage: null,
        };
    }

    const responseData = await appointmentFormService(validatedFields.data);

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            errorMessage: "Ops! Something went wrong. Please try again later.",
        };
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            zodErrors: null,
            errorMessage: "Failed to submit. Please try again.",
        };
    }

    // Success case
    return {
        strapiErrors: null,
        zodErrors: null,
        errorMessage: null,
        successMessage: "Appointment booked successfully!",
    };
}
