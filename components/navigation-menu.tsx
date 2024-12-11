import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeBtn } from "./ui/theme-btn";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/cn";

export const NavigationMenu: React.FC = () => {
  return (
    <menu className="flex items-center gap-x-2">
      <Link
        href={"#"}
        className={cn(buttonVariants({ variant: "plain", className: "group" }))}
      >
        <HeartIcon className="group-hover:text-rose-500 group-hover:fill-rose-500 text-muted-foreground fill-muted-foreground" />
        Buy me a Coffee
      </Link>
      <ThemeBtn />
    </menu>
  );
};
