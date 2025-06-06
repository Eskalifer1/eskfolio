import Image from "next/image";

import WoodenFrame from "../WoodenFrame";

function AboutAvatar() {
  return (
    <WoodenFrame className="aspect-[3/4] max-h-full min-h-[220px] md:md:h-[max(320px,70%)] 2xl:h-fit 2xl:w-full">
      <Image
        src="/my-photo.webp"
        fill
        alt="My photo"
        className="object-cover"
        sizes="50vw"
      />
    </WoodenFrame>
  );
}

AboutAvatar.whyDidYouRender = true;

export default AboutAvatar;
