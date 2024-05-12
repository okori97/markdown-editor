"use client";
import { useEffect } from "react";
import { Button } from "./Button";
import { FileItem } from "./FileItem";
import { Switch } from "./Switch";
import { useAppContext } from "../Context/state";
import { NEW_DOCUMENT } from "~/utils/constants";
import { getAllFiles } from "~/server/queries";
import type { MDFile } from "types";

export function Sidebar() {
  const {
    isSidebarOpen,
    savedFiles,
    setSavedFiles,
    setActiveFile,
    setIsSidebarOpen,
  } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const data: MDFile[] = await getAllFiles();
      setSavedFiles(data);

      return data;
    }
    fetchData().catch(console.error);
  }, [isSidebarOpen]);

  if (isSidebarOpen == false) {
    return;
  }

  const createNewDocument = (): void => {
    setActiveFile(NEW_DOCUMENT);
    setIsSidebarOpen(false);
  };
  return (
    <div className={sidebarContClasses}>
      <section>
        <div className=" text-sm font-normal tracking-widest text-secondary-150">
          <p className="mb-5">MY DOCUMENTS</p>
          <Button
            icon="plus"
            text="New Document"
            isFullWidth={true}
            onClick={createNewDocument}
          />
        </div>
        <div className="mt-5 flex flex-col gap-5">
          {savedFiles.map((file) => (
            <FileItem document={file} isInNavbar={false} key={file.id} />
          ))}
        </div>
      </section>
      <Switch />
    </div>
  );
}

const sidebarContClasses =
  "flex-shrink-1 flex h-full w-[480px] flex-col justify-between bg-primary-200 p-5 sm:w-[250px] sm:flex-shrink-0";
