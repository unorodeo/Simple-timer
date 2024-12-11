import { Feedback } from "@/components/feedback";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";
import { Settings } from "@/components/settings";

interface Props {
  children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
  return (
    <>
      <Navigation />
      {children}
      <div className="absolute right-4 bottom-4">
        <div className="flex flex-col gap-4">
          <Settings />
          <Feedback />
        </div>
      </div>
    </>
  );
}
