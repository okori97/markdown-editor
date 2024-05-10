"use client";

import Image from "next/image";
import "../../../public/icon-menu.svg";
import { FileItem } from "./FileItem";
import { Button } from "./Button";
import { useAppContext } from "../Context/state";
import { saveFile } from "~/server/queries";

export function Navbar() {
  const {
    setIsSidebarOpen,
    isSidebarOpen,
    activeFile,
    setIsModalOpen,
    setActiveFile,
  } = useAppContext();

  const handleSave = async () => {
    const updatedDoc = await saveFile(activeFile);
    if (updatedDoc != undefined && updatedDoc?.length > 0) {
      setActiveFile(updatedDoc[0]!);
    }
  };

  return (
    <div className="flex h-fit w-full items-center justify-between bg-primary-150 pr-3">
      <div className="flex items-center ">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div
            className={
              (isSidebarOpen ? "bg-tertiary-150" : "bg-primary-100") +
              " px-4 py-6"
            }
          >
            <Image src={"/icon-menu.svg"} alt="" width={24} height={24} />
          </div>
        </button>
        <div className="mr-5 flex h-8  items-center border-r px-8 ">
          <Image src={"/logo.svg"} alt="logo" width={128} height={32} />
        </div>
        <FileItem document={activeFile} isInNavbar={true} />
      </div>
      <div className="flex items-center">
        <a
          className="mr-3 w-4"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <div className={"icon-bin"}></div>
        </a>
        <Button icon="save" text="Save Changes" onClick={handleSave} />
      </div>
    </div>
  );
}
