import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold transition-[transform,background-color,color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-raised",
        primary: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-raised",
        outline: "border border-border-strong bg-background text-foreground hover:border-primary hover:text-primary",
        quiet: "px-0 text-primary underline-offset-4 hover:underline",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "min-h-11 px-5",
        sm: "min-h-9 px-3",
        lg: "min-h-12 px-7",
        icon: "h-11 w-11 shrink-0 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);

export { buttonVariants };
