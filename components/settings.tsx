import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";
import React from "react";
import { SettingsIcon } from "lucide-react";

export const Settings: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant={"secondary"}
          size={"icon-lg"}
          className="[&_svg]:size-5 rounded-full"
          aria-label="app settings"
        >
          <SettingsIcon className="text-muted-foreground" />
          <span className="sr-only">open settings</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Settings</p>
      </TooltipContent>
    </Tooltip>
  );
};
