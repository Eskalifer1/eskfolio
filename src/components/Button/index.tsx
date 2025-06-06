import { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "contained" | "outlined" | "text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  leftIconClassName?: string;
}

const baseStyles =
  "group flex items-center justify-center py-1 px-2 md:px-4 md:py-2 rounded-xl font-medium transition-all duration-300 ease-in-out text-sm focus:outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-70";
const variantStyles = {
  contained: "bg-primary text-secondary shadow-soft hover:shadow-hard",
  outlined:
    "border border-primary text-primary bg-transparent hover:bg-primary/10",
  text: "text-primary bg-transparent hover:underline",
};

export default function Button({
  variant = "contained",
  className = "",
  children,
  disabled,
  leftIcon,
  leftIconClassName,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {leftIcon && (
        <span className={cn("mr-2 h-10 w-10", leftIconClassName)}>
          {leftIcon}
        </span>
      )}
      {children}
    </button>
  );
}
