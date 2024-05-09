"use client";
import Image from "next/image";
import type { MDFile } from "types";
import { getFile } from "~/server/queries";
import { useAppContext } from "../Context/state";

export function FileItem({
  document,
  isInNavbar,
}: {
  document: MDFile;
  isInNavbar: boolean;
}) {
  const { setActiveFile } = useAppContext();
  const getDocument = async () => {
    const selected = await getFile(document.id);
    setActiveFile(selected!);
  };
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
        <p
          className="cursor-pointer text-white hover:text-tertiary-150"
          onClick={isInNavbar ? undefined : () => getDocument()}
        >
          {document?.title}.md
        </p>
      </div>
    </div>
  );
}
