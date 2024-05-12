"use client";

import { useAppContext } from "../Context/state";
import type { MDFile } from "types";
import { saveFile } from "~/server/queries";

export default function InputField({
  toggleVisibility,
}: {
  toggleVisibility: () => void;
}) {
  const { activeFile, setActiveFile } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setActiveFile((prev): MDFile => {
      return { ...prev, title: target.value };
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    const updatedDoc = await saveFile(activeFile);
    if (updatedDoc != undefined && updatedDoc?.length > 0) {
      setActiveFile(updatedDoc[0]!);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSubmit(e);
      toggleVisibility();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={activeFile.title}
        className=" border-white bg-transparent text-white caret-tertiary-150 focus:border-b focus:outline-none"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className=" hidden"></button>
    </form>
  );
}
