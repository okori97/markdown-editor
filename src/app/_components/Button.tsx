import Image from "next/image";

export function Button({
  icon,
  text,
  isFullWidth,
}: {
  icon: string;
  text: string;
  isFullWidth?: boolean;
}) {
  return (
    <button
      className={
        (isFullWidth ? "w-full justify-center " : "") +
        "bg-tertiary-100 flex gap-2 rounded-sm px-3 py-2 text-xs font-light text-white"
      }
    >
      <Image
        src={`/icon-${icon}.svg`}
        alt={`${icon} icon`}
        width={16}
        height={16}
        className="h-[14px] w-auto"
      />
      <p>{text}</p>
    </button>
  );
}
