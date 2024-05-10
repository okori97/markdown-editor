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
    <div className="flex h-fit w-full items-center justify-between bg-primary-150 pr-[6px] sm:pr-3">
      <div className="flex w-fit items-center ">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div
            className={
              (isSidebarOpen ? "bg-tertiary-150" : "bg-primary-100") +
              " mr-4 px-4 py-5  sm:mr-0 sm:px-4 sm:py-6"
            }
          >
            <Image
              src={"/icon-menu.svg"}
              alt=""
              width={24}
              height={24}
              className=" w-[20px] sm:w-[24px]"
            />
          </div>
        </button>
        <div className="hidden sm:mr-5 sm:flex   sm:h-8 sm:items-center sm:border-r sm:px-8 ">
          <Image src={"/logo.svg"} alt="logo" width={128} height={32} />
        </div>
        <FileItem document={activeFile} isInNavbar={true} />
      </div>

      <div className="flex items-center">
        <a
          className=" mr-5 w-4 sm:mr-3"
          href=""
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          <div className={"icon-bin"}></div>
        </a>
        <Button
          icon="save"
          text="Save Changes"
          onClick={handleSave}
          shrinkOnMobile={true}
        />
      </div>
    </div>
  );
}
