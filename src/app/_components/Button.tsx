import Image from "next/image";
import { useAppContext } from "../Context/state";
import type { MDFile } from "types";

export function Button({
  icon,
  text,
  isFullWidth,
  onClick,
}: {
  icon?: string;
  text: string;
  isFullWidth?: boolean;
  onClick?: (data: MDFile | undefined) => Promise<void> | undefined | void;
}) {
  const { activeFile } = useAppContext();

  return (
    <button
      className={
        (isFullWidth ? "w-full justify-center " : "") +
        "flex min-h-10 items-center gap-2 rounded-[4px] bg-tertiary-100 px-4 py-1 text-sm font-light text-white hover:bg-tertiary-150"
      }
      onClick={onClick ? () => onClick(activeFile) : undefined}
    >
      {icon ? (
        <Image
          src={`/icon-${icon}.svg`}
          alt={`${icon} icon`}
          width={16}
          height={16}
          className="h-[14px] w-auto"
        />
      ) : undefined}
      <p>{text}</p>
    </button>
  );
}
