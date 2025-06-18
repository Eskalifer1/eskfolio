"use client";

import { ElementType, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

import { useAnimatedEffect } from "@/hooks/useAnimateEffect";

import { TIMING_DOUBLED_LOADING_SCREEN } from "@/consts/timing";

import { getRandomLetter, getRandomString } from "@/helpers/getRandomString";
import { insertSoftBreaks } from "@/helpers/insertSoftBreak";

import { Typography, TypographyProps } from "../Typography";

interface TextScramblerProps
  extends Omit<TypographyProps<ElementType>, "children"> {
  text: string;
  triggerOnHover?: boolean;
  className?: string;
  speed?: number;
  delay?: number;
}

function TextScrambler({
  text,
  triggerOnHover = false,
  className = "",
  speed = 50,
  delay = 0,
  ...props
}: TextScramblerProps) {
  const [displayedText, setDisplayedText] = useState("");
  const iterationRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClearTimeout = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const scramble = () => {
    handleClearTimeout();
    iterationRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayedText(() => {
        const scrambled = text
          .split("")
          .map((_, index) => {
            if (index < iterationRef.current) return text[index];
            return getRandomLetter();
          })
          .join("");

        const padded = scrambled.padEnd(text.length, " ");
        return insertSoftBreaks(padded, 3);
      });

      iterationRef.current += 1;

      if (iterationRef.current >= text.length) {
        handleClearTimeout();
        setDisplayedText(text);
      }
    }, speed);
  };

  useEffect(() => {
    setDisplayedText(insertSoftBreaks(getRandomString(text.length), 3));
  }, [text]);

  useAnimatedEffect(
    () => {
      scramble();
      return () => {
        handleClearTimeout();
      };
    },
    [text],
    TIMING_DOUBLED_LOADING_SCREEN + delay,
  );

  return (
    <div className="relative">
      <Typography className={cn("invisible", className)} {...props}>
        {text}
      </Typography>
      <Typography
        className={cn("absolute inset-0", className)}
        onMouseEnter={triggerOnHover ? scramble : undefined}
        {...props}
      >
        {displayedText}
      </Typography>
    </div>
  );
}

export default TextScrambler;
