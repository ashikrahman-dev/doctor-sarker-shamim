"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

export function DatePickerField({ error, name = "appointment-date" }) {
    const [date, setDate] = React.useState();

    return (
        <div className="flex flex-col gap-2">
            <Label
                htmlFor={name}
                className={`block text-sm font-semibold ${
                    error ? "text-red-500" : "text-dark"
                }`}
            >
                Appointment Date
            </Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] h-[58px] justify-start text-left font-normal bg-dark-4 border-0 hover:bg-dark-4 focus:outline-none focus-within:outline-none focus:border-0 focus:shadow-none focus-visible:ring-0",
                            !date && "text-dark/50",
                            error && "border-2 border-red-500"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                            format(date, "PPP")
                        ) : (
                            <span className={error ? "text-red-400" : ""}>
                                Pick a date
                            </span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            {/* Hidden input to submit the date value */}
            <input
                type="hidden"
                name={name}
                value={date ? format(date, "yyyy-MM-dd") : ""}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
