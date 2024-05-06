"use client";

import { useEffect } from "react";
import { useAppContext } from "./Context/state";
import type { MDFile } from "types";

import { Editor } from "./_components/Editor";
import { Preview } from "./_components/Preview";
import { getAllFiles } from "~/server/queries";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { setSavedFiles, setActiveFile } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const data: MDFile[] = await getAllFiles();
      setSavedFiles(data);

      if (data.length > 0) {
        setActiveFile(data[0]);
      }

      return data;
    }

    fetchData().catch(console.error);
  }, []);

  return (
    <main className="flex min-h-screen flex-row ">
      <Editor />
      <Preview file={{ content: "# Hello World" }} />
    </main>
  );
}
