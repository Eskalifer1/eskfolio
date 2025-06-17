import toast from "react-hot-toast";

import TrophySvg from "@/assets/svg/trophy.svg";

import { cn } from "@/lib/cn";

import { Typography } from "../Typography";

interface PropsType {
  title: string;
  description: string;
  className?: string;
  visible?: boolean;
  id: string;
}

function Toast({ title, description, className, visible, id }: PropsType) {
  const handleDismiss = () => {
    toast.dismiss(id);
  };

  return (
    <div
      className={cn(
        "border-accent shadow-accent font-default text-primary flex w-full max-w-96 cursor-pointer gap-4 rounded-lg border bg-white/20 p-4 font-semibold shadow-md select-none",
        "backdrop-supported",
        visible ? "animate-enter" : "animate-leave",
        className,
      )}
      onClick={handleDismiss}
      role="alert"
    >
      <div className="flex aspect-square flex-1 items-center justify-center">
        <TrophySvg />
      </div>
      <div className="flex flex-3 flex-col gap-2">
        <Typography className="mb-1" variant="h4" as="p">
          {title}
        </Typography>
        <Typography as="p" className="whitespace-pre-wrap">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default Toast;
