import Image from "next/image";

export function FileItem() {
  return (
    <div className="flex items-center">
      <Image
        src="/icon-document.svg"
        alt="docuument"
        width={14}
        height={14}
        className="h-[14px] w-auto pr-4"
      />
      <div className="flex flex-col text-xs font-light">
        <p className=" text-secondary-150">Document Name</p>
        <p className="text-white">Welcome.md</p>
      </div>
    </div>
  );
}
