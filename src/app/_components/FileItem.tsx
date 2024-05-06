"use client";
import Image from "next/image";
import type { MDFile } from "types";

export function FileItem({
  document,
  isInNavbar,
}: {
  document: MDFile | undefined;
  isInNavbar: boolean;
}) {
  console.log(document, isInNavbar);
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
        {isInNavbar == true ? (
          <p className=" text-secondary-150">Document Name</p>
        ) : (
          <p className="text-white">{document?.createdAt}</p>
        )}
        <p className="text-white">{document?.title}.md</p>
      </div>
    </div>
  );
}
