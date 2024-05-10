import { DocumentHeading } from "./DocumentHeading";
import { useAppContext } from "../Context/state";
import type { MDFile } from "types";
import { PLACEHOLDER } from "~/utils/constants";

export function Editor() {
  const { activeFile, setActiveFile, isFullScreen } = useAppContext();

  if (isFullScreen) {
    return;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    console.log(target.value);

    setActiveFile((prev): MDFile => {
      return { ...prev, content: target.value };
    });
  };

  return (
    <div className="h-lvh w-full sm:w-1/2 sm:border-r ">
      <DocumentHeading text="MARKDOWN" isPreview={false} />
      <div className=" h-full  overflow-y-auto">
        <textarea
          className=" font-regular h-full   w-full  bg-white  p-4 text-sm text-primary-150 focus:outline-none"
          value={activeFile?.content ?? ""}
          onChange={handleChange}
          placeholder={PLACEHOLDER}
        ></textarea>
      </div>
    </div>
  );
}
