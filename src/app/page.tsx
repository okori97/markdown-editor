"use client";

import { useEffect } from "react";
import { useAppContext } from "./Context/state";
import type { MDFile } from "types";

import { Editor } from "./_components/Editor";
import { Preview } from "./_components/Preview";
import { getAllFiles } from "~/server/queries";
import { Modal } from "./_components/Modal";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { setSavedFiles, setActiveFile, isModalOpen, isSidebarOpen } =
    useAppContext();

  useEffect(() => {
    async function fetchData() {
      const data: MDFile[] = await getAllFiles();
      setSavedFiles(data);

      if (data.length > 0) {
        const current = data[0];
        setActiveFile(current!);
      }

      return data;
    }
    fetchData().catch(console.error);
  }, [setSavedFiles, setActiveFile]);

  return (
    <main
      className={
        (isSidebarOpen ? " relative " : "") + "min-h-screen flex-row sm:flex "
      }
    >
      <Editor />
      <Preview />
      {isModalOpen == true && <Modal />}
    </main>
  );
}
