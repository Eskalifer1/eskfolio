import EmailIcon from "@/assets/svg/email.svg";
import GitHubIcon from "@/assets/svg/github.svg";
import LinkedInIcon from "@/assets/svg/linkedin.svg";

import { Typography } from "@/components/Typography";

import { socialLinks } from "@/consts/links/social-links";

import CVButton from "./CVButton";
import AboutSocialLink from "./SocialLink";

function AboutInfo() {
  return (
    <>
      <Typography variant="h2">
        I&apos;m Artem — a frontend developer from Ukraine.
      </Typography>
      <Typography variant="h5" as="h3" className="font-normal">
        I craft user interfaces with care, blending function and feeling into
        every pixel. Currently living in Ukraine, unmarried, and fully immersed
        in building digital experiences that feel human.
      </Typography>
      <Typography>
        This is my cozy corner of the internet — glad to have you here.
      </Typography>
      <CVButton />
      <div className="mt-6 flex items-center gap-4 max-md:justify-center">
        <AboutSocialLink
          href={socialLinks.gitHub}
          outerShadow="shadow-[0px_9px_10px_rgba(0,0,0,0.75)]"
          aria-label="Github profile"
        >
          <GitHubIcon />
        </AboutSocialLink>
        <AboutSocialLink
          href={socialLinks.linkedIn}
          outerShadow="shadow-[2px_9px_10px_rgba(0,0,0,0.75)]"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon />
        </AboutSocialLink>
        <AboutSocialLink
          href={socialLinks.email}
          outerShadow="shadow-[6px_9px_10px_rgba(0,0,0,0.75)]"
          title={socialLinks.email}
          aria-label="My email"
        >
          <EmailIcon />
        </AboutSocialLink>
      </div>
    </>
  );
}

export default AboutInfo;
