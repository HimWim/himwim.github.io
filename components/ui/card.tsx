import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "gradient-border relative rounded-xl bg-slate-900/60 p-[1px] shadow-xl shadow-black/40",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export interface CardInnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardInner = React.forwardRef<HTMLDivElement, CardInnerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-full w-full rounded-[11px] bg-slate-950/90 px-5 py-6 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  )
);

CardInner.displayName = "CardInner";

