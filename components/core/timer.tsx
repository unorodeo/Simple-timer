"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focus";

interface Props {
  time: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  };
  mutate?: {
    days: (evt: React.ChangeEvent<HTMLInputElement> | undefined) => void;
    hours: (evt: React.ChangeEvent<HTMLInputElement> | undefined) => void;
    minutes: (evt: React.ChangeEvent<HTMLInputElement> | undefined) => void;
    seconds: (evt: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  };
  run: boolean;
}

export const Timer: React.FC<Props> = ({ time, mutate, run }) => {
  return (
    <section className="relative flex flex-col flex-wrap gap-2 md:flex-row">
      {run ? (
        <div className="absolute top-0 left-0 z-20 flex flex-wrap w-full h-full bg-transparent select-none"></div>
      ) : null}
      <time className="grid gap-2">
        <p className="text-sm font-medium text-muted-foreground">Days</p>
        <TimeInput
          placeholder="000"
          maxLength={3}
          value={time.days}
          onChange={mutate?.days}
          autoComplete="off"
          pattern="^\d{3}$"
          days
        />
        <p className="text-sm font-medium text-muted-foreground">
          Days &mdash; 0 - 999
        </p>
      </time>
      <time className="grid gap-2">
        <p className="text-sm font-medium text-muted-foreground">Hours</p>
        <TimeInput
          placeholder="0"
          maxLength={2}
          value={time.hours}
          onChange={mutate?.hours}
          autoComplete="off"
          pattern="^\d{2}$"
        />
        <p className="text-sm font-medium text-muted-foreground">
          Hours &mdash; 0 - 99
        </p>
      </time>
      <time className="grid gap-2">
        <p className="text-sm font-medium text-muted-foreground">Minutes</p>
        <TimeInput
          placeholder="00"
          maxLength={2}
          value={time.minutes}
          onChange={mutate?.minutes}
          autoComplete="off"
          pattern="^\d{2}$"
        />
        <p className="text-sm font-medium text-muted-foreground">
          Minutes &mdash; 0 - 99
        </p>
      </time>
      <time className="grid gap-2">
        <p className="text-sm font-medium text-muted-foreground">Seconds</p>
        <TimeInput
          placeholder="0"
          maxLength={2}
          value={time.seconds}
          onChange={mutate?.seconds}
          autoComplete="off"
          pattern="^\d{2}$"
        />
        <p className="text-sm font-medium text-muted-foreground">
          Seconds &mdash; 0 - 99
        </p>
      </time>
    </section>
  );
};

const TimeInput = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<"input">, "type"> & {
    days?: boolean;
  }
>(({ className, days = false, ...props }, ref) => {
  return (
    <input
      type={"text"}
      className={cn(
        "flex rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors placeholder:text-muted-foreground/40 disabled:cursor-not-allowed disabled:opacity-50 text-4xl md:text-9xl h-44 w-full md:w-48 text-end font-extrabold font-geist-mono selection:bg-muted selection:text-muted-foreground",
        {
          "md:w-80": days,
        },
        focusRing,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TimeInput.displayName = "TimeInput";
