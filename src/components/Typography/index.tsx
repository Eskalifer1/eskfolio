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

const variantStyles: Record<TypographyVariants, string> = {
  h1: "text-7xl font-bold",
  h2: "text-5xl font-bold",
  h3: "text-4xl font-bold",
  h4: "text-3xl font-bold",
  h5: "text-2xl font-bold",
  h6: "text-xl font-bold",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
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
    <Component className={cn(variantStyles[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
