import Image, { ImageProps } from "next/image";

import { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  imageProps: ImageProps;
}

function BackgroundImage({ imageProps, className, ...props }: PropsType) {
  const { alt, className: imageClassName } = imageProps;
  return (
    <div className={cn("absolute inset-0 -z-1", className)} {...props}>
      <Image
        sizes="100vw"
        quality={100}
        {...imageProps}
        alt={alt}
        className={cn("object-cover object-top", imageClassName)}
        priority
      />
    </div>
  );
}

BackgroundImage.whyDidYouRender = true;

export default BackgroundImage;
