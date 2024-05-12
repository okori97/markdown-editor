"use client";
import { useAppContext } from "../Context/state";
import { Button } from "./Button";
import { deleteFile } from "~/server/queries";
import { NEW_DOCUMENT } from "~/utils/constants";
import type { MDFile } from "types";
import { getAllFiles } from "~/server/queries";
import { roboto_slab } from "./Preview";

export function Modal() {
  const { activeFile, setIsModalOpen, setActiveFile, setSavedFiles } =
    useAppContext();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteFile = async () => {
    await deleteFile(activeFile?.id);
    setIsModalOpen(false);

    const data: MDFile[] = await getAllFiles();
    setSavedFiles(data);

    if (data.length > 0) {
      const next = data.find((file) => file.id !== activeFile.id);
      setActiveFile(next!);
    } else {
      setActiveFile(NEW_DOCUMENT);
    }
  };

  return (
    <div
      className="absolute top-0 z-0  h-full w-full  bg-black bg-opacity-80"
      onClick={handleClose}
    >
      <div className={ModalClasses} onClick={handleModalContentClick}>
        <h2 className="text-xl font-semibold ">Delete this document?</h2>
        <p className=" text-sm font-light  leading-[1.9] text-secondary-150">
          Are you sure you want to delete the{" "}
          <span className=" bg-tertiary-150 px-1  text-white">
            {" "}
            {activeFile?.title}.md
          </span>{" "}
          document and its contents? This action cannot be undone.
        </p>
        <Button
          isFullWidth={true}
          text={"Confirm & Delete"}
          onClick={handleDeleteFile}
        />
      </div>
    </div>
  );
}

const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const ModalClasses = `relative left-1/2 top-1/2 z-10 flex  h-auto w-[350px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-white p-6 ${roboto_slab.variable} font-robotoSlab`;
