import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export const Section: React.FC<
  ComponentPropsWithoutRef<"section"> & { bleed?: boolean }
> = ({ className, children, bleed = false, ...props }) => {
  return (
    <section
      className={cn(
        "max-w-6xl mx-auto px-4 py-6",
        { "max-w-full": bleed },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
