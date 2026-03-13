import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
          variant === "default" &&
            "bg-slate-900/80 text-slate-100 ring-1 ring-slate-700/80",
          variant === "outline" &&
            "border border-border bg-transparent text-slate-200",
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

