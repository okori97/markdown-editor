import { DocumentHeading } from "./DocumentHeading";
import { useAppContext } from "../Context/state";
import type { MDFile } from "types";
import { PLACEHOLDER } from "~/utils/constants";
import { Roboto_Mono } from "next/font/google";

export function Editor() {
  const { activeFile, setActiveFile, isFullScreen } = useAppContext();

  if (isFullScreen) {
    return;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    setActiveFile((prev): MDFile => {
      return { ...prev, content: target.value };
    });
  };

  return (
    <div className={editorContClasses}>
      <DocumentHeading text="MARKDOWN" isPreview={false} />
      <div className=" h-full  overflow-y-auto">
        <textarea
          className={textAreaClasses}
          value={activeFile?.content ?? ""}
          onChange={handleChange}
          placeholder={PLACEHOLDER}
        ></textarea>
      </div>
    </div>
  );
}

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto-mono",
});

const textAreaClasses = `${roboto_mono.variable} font-robotoMono h-full w-full  bg-white  p-4 text-sm text-primary-150 focus:outline-none dark:bg-primary-200 dark:text-secondary-100`;
const editorContClasses =
  "h-full w-full  grow-0 sm:w-1/2 sm:border-r dark:border-secondary-200";
