import Skeleton from "@/components/Sprites/Skeleton";

interface PropsType {
  onClick: () => void;
}

function ProjectSkeleton({ onClick }: PropsType) {
  return (
    <div className="absolute bottom-4 left-[200vw] z-2">
      <Skeleton aria-hidden onClick={onClick} />
    </div>
  );
}

export default ProjectSkeleton;
