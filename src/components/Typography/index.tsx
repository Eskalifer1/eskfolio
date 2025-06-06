import React, { JSX } from "react";

import { cn } from "@/lib/cn";

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption";

type DefaultTags = {
  [key in TypographyVariants]: keyof JSX.IntrinsicElements;
};

const defaultTagMap: DefaultTags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
};

// const variantStyles: Record<TypographyVariants, string> = {
//   h1: "text-7xl font-bold",
//   h2: "text-5xl font-bold",
//   h3: "text-4xl font-bold",
//   h4: "text-3xl font-bold",
//   h5: "text-2xl font-bold",
//   h6: "text-xl font-bold",
//   body1: "text-base",
//   body2: "text-sm",
//   caption: "text-xs",
// };

const variantStyles: Record<TypographyVariants, string> = {
  h1: "text-[clamp(2.25rem,1.6071rem+3.2143vw,4.5rem)] 2xl:text-[clamp(4.75rem,3.25rem+1.5625vw,5.75rem)] font-bold",
  h2: "text-[clamp(2rem,1.7143rem+1.4286vw,3rem)] 2xl:text-[clamp(3.25rem,2.125rem+1.1719vw,4rem)] font-bold",
  h3: "text-[clamp(1.95rem,0.6563rem+1.3477vw,2.8125rem)] 2xl:text-[clamp(2.5rem,1.75rem+0.7813vw,3rem)] font-bold",
  h4: "text-[clamp(1.25rem,1.1071rem+0.7143vw,1.75rem)] 2xl:text-[clamp(1.875rem,0.9375rem+0.9766vw,2.5rem)] font-bold",
  h5: "text-[clamp(1.125rem,1.0179rem+0.5357vw,1.5rem)] 2xl:text-[clamp(1.5625rem,0.9063rem+0.6836vw,2rem)] font-bold",
  h6: "text-[clamp(1rem,0.625rem+0.3906vw,1.25rem)] 2xl:text-[clamp(1.25rem,1.2143rem+0.1786vw,1.375rem)] font-bold",
  body1:
    "text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] 2xl:text-[clamp(1rem,0.8125rem+0.1953vw,1.125rem)]",
  body2:
    "text-[clamp(0.75rem,0.7143rem+0.1786vw,0.875rem)] 2xl:text-[clamp(0.875rem,0.6875rem+0.1953vw,1rem)]",
  caption:
    "text-[clamp(0.625rem,0.5893rem+0.1786vw,0.75rem)] 2xl:text-[clamp(0.75rem,0.5625rem+0.1953vw,0.875rem)]",
};

export type TypographyProps<T extends React.ElementType> = {
  variant?: TypographyVariants;
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Typography<T extends React.ElementType = "span">({
  variant = "body1",
  as,
  className,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = as || defaultTagMap[variant];

  return (
    <Component
      className={cn(variantStyles[variant], "leading-[1.1]", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
