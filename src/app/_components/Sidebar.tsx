"use client";

import { Button } from "./Button";
import { FileItem } from "./FileItem";
import { useAppContext } from "../Context/state";

export function Sidebar() {
  const { isSidebarOpen, savedFiles } = useAppContext();

  if (isSidebarOpen == false) {
    return;
  }

  return (
    <div className="bg-primary-200 h-lvh w-[250px]  p-5">
      <div className=" text-secondary-150 text-sm font-normal tracking-widest">
        <p className="mb-5">MY DOCUMENTS</p>
        <Button icon="plus" text="New Document" isFullWidth={true} />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {savedFiles.map((file) => (
          <FileItem document={file} isInNavbar={false} key={file.id} />
        ))}
      </div>
    </div>
  );
}
