"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import * as React from "react"

function formatDate(date) {
    if (!date) {
        return ""
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

function isValidDate(date) {
    if (!date) {
        return false
    }
    return !isNaN(date.getTime())
}

export function DatePickerField() {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState(
        new Date("2025-06-01")
    )
    const [month, setMonth] = React.useState(date)
    const [value, setValue] = React.useState(formatDate(date))

    return (
        <div className="flex flex-col gap-2 ">
            <Label htmlFor="date" className="flex justify-start text-sm text-dark font-semibold">
                Date
            </Label>
            <div className="relative flex gap-2">
                <Input
                    id="date"
                    value={value}
                    placeholder="June 01, 2025"
                    className="pr-10 border-0 block w-full h-12 md:h-[58px] rounded-lg bg-dark-7 p-4 text-base text-dark font-medium  placeholder:text-dark/50 focus:outline-none focus-within:outline-none focus:border-0 focus:shadow-none focus-visible:ring-0"
                    onChange={(e) => {
                        const date = new Date(e.target.value)
                        setValue(e.target.value)
                        if (isValidDate(date)) {
                            setDate(date)
                            setMonth(date)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault()
                            setOpen(true)
                        }
                    }}
                />
                <Popover open={open} onOpenChange={setOpen} className="bg-white">
                    <PopoverTrigger asChild className="bg-white">
                        <Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2 bg-prim"
                        >
                            <CalendarIcon className="size-4 text-[#919395]" />
                            <span className="sr-only text-base text-dark font-medium  placeholder:text-dark/50">Select date</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto overflow-hidden p-0 bg-white border-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            month={month}
                            onMonthChange={setMonth}
                            onSelect={(date) => {
                                setDate(date)
                                setValue(formatDate(date))
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}