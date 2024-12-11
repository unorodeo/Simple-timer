import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";
import React from "react";
import { ThumbsUpIcon } from "lucide-react";

export const Feedback: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant={"secondary"}
          size={"icon-lg"}
          className="[&_svg]:size-5 rounded-full"
          aria-label="leave a feedback"
        >
          <ThumbsUpIcon className="text-muted-foreground" />
          <span className="sr-only">leave a feedback</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Leave a feedback</p>
      </TooltipContent>
    </Tooltip>
  );
};
