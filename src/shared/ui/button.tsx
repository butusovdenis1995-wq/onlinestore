import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@shared/lib/cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-text-btn font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/80",
        outline: "border-gray-400 border-2 hover:bg-gray-200",
        transparent: "text-gray-500 hover:bg-gray-200 hover:text-black",
      },
      size: {
        default: "h-9 px-5",
        xs: "h-10 px-2 py-6",
        sm: "h-14 px-3.5 py-7.5 hover:scale-105",
        lg: "h-16 gap-[0.5rem] px-4 py-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:scale-105",
      },
      fill: {
        width: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
function Button({
  className,
  variant = "default",
  size = "default",
  fill,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          fill,
          className,
        }),
      )}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
