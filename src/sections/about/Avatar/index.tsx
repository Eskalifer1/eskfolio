import Image from "next/image";

import WoodenFrame from "../WoodenFrame";

function AboutAvatar() {
  return (
    <WoodenFrame>
      <Image
        src="/my-photo.webp"
        fill
        alt="My photo"
        className="object-cover"
      />
    </WoodenFrame>
  );
}

export default AboutAvatar;
