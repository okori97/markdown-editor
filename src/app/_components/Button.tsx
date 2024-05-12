import Image from "next/image";
import { useAppContext } from "../Context/state";
import type { MDFile } from "types";

export function Button({
  icon,
  text,
  isFullWidth,
  onClick,
  shrinkOnMobile,
}: {
  icon?: string;
  text: string;
  isFullWidth?: boolean;
  onClick?: (data: MDFile | undefined) => Promise<void> | undefined | void;
  shrinkOnMobile?: boolean;
}) {
  const { activeFile } = useAppContext();

  const buttonClasses =
    (isFullWidth ? "w-full justify-center " : "") +
    "flex min-h-10 items-center gap-2 rounded-[4px] bg-tertiary-100 p-3 text-sm font-light text-white hover:bg-tertiary-150 sm:px-4 sm:py-1";

  return (
    <button
      className={buttonClasses}
      onClick={onClick ? () => onClick(activeFile) : undefined}
    >
      {icon ? (
        <Image
          src={`/icon-${icon}.svg`}
          alt={`${icon} icon`}
          width={16}
          height={16}
          className="h-[16px] w-auto sm:h-[14px]"
        />
      ) : undefined}
      <p className={shrinkOnMobile ? "hidden sm:block" : " font-roboto"}>
        {text}
      </p>
    </button>
  );
}
