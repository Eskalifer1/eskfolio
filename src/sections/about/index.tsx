import AboutAvatar from "./Avatar";
import AboutInfo from "./Info";
import AboutWrap from "./Wrap";

export function AboutSection() {
  return (
    <AboutWrap>
      <div className="flex h-full gap-4 pt-8">
        <div className="flex flex-1 flex-col gap-3.5">
          <AboutInfo />
        </div>
        <div className="flex flex-1 justify-center">
          <AboutAvatar />
        </div>
      </div>
    </AboutWrap>
  );
}

export default AboutSection;
