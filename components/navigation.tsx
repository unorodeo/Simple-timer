import Link from "next/link";
import { NavigationMenu } from "./navigation-menu";
import React from "react";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focus";

export const Navigation: React.FC = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b bg-background">
      <nav className="flex items-center justify-between px-4 mx-auto max-w-7xl h-14">
        <Link
          href={"#"}
          className={cn(
            "text-2xl tracking-tight font-semibold rounded-md",
            focusRing
          )}
        >
          Simple timer ✦
        </Link>

        <NavigationMenu />
      </nav>
    </header>
  );
};
