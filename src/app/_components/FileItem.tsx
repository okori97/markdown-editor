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
    <div className="flex w-fit items-center">
      <Image
        src="/icon-document.svg"
        alt="docuument"
        width={14}
        height={14}
        className="h-4 w-auto pr-4 sm:h-[14px]"
      />
      <div className="flex flex-col text-sm font-light sm:text-xs">
        {isInNavbar == true ? (
          <p className=" hidden  sm:block sm:text-secondary-150 ">
            Document Name
          </p>
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
