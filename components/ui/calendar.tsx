"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, DayPickerProps } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { cn } from "@/src/lib/utils";

// Custom Day Button
function CalendarDayButton({ day, selected, ...props }: any) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "flex aspect-square w-full min-w-[2rem] flex-col gap-1 leading-none font-normal",
        selected && "bg-primary text-primary-foreground"
      )}
      {...props}
    >
      {day.getDate()}
    </Button>
  );
}

// Use type intersection instead of interface extending union
type CalendarProps = DayPickerProps & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
};

export default function Calendar({ className, components, ...props }: CalendarProps) {
  return (
    <DayPicker
      {...props}
      components={{
        Day: CalendarDayButton,
        IconLeft: (props) => <ChevronLeftIcon {...props} />,
        IconRight: (props) => <ChevronRightIcon {...props} />,
        IconDropdown: (props) => <ChevronDownIcon {...props} />,
        ...components,
      }}
      className={cn("bg-background p-3 rounded-md", className)}
    />
  );
}
