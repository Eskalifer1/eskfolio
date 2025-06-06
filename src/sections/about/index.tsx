import AboutAvatar from "./Avatar";
import AboutInfo from "./Info";
import AboutWrap from "./Wrap";

export function AboutSection() {
  return (
    <AboutWrap>
      <div className="flex h-full gap-4 pt-8 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-3.5 2xl:flex-2">
          <AboutInfo />
        </div>
        <div className="md:p3 flex flex-1 justify-center p-1 max-sm:pb-20 xl:p-6">
          <AboutAvatar />
        </div>
      </div>
    </AboutWrap>
  );
}

export default AboutSection;
