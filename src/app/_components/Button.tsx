import Image from "next/image";

export function Button({ icon, text }: { icon: string; text: string }) {
  return (
    <button className="bg-tertiary-150 flex gap-2 rounded-sm px-3 py-2 text-xs font-light text-white">
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
