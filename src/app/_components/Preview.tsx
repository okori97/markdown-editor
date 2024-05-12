import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../Context/state";
import styles from "../../styles/Preview.module.css";
import "../../styles/globals.css";
import { Roboto_Slab } from "next/font/google";

export function Preview() {
  const { activeFile, isFullScreen } = useAppContext();

  const previewContClasses = isFullScreen
    ? " w-full justify-center bg-white h-screen dark:bg-primary-200"
    : "hidden h-lvh sm:block sm:w-1/2 bg-white dark:bg-primary-200";

  const markdownClasses = `${styles.markdown} ${isFullScreen ? "w-full sm:w-[672px]" : ""} h-screen overflow-y-auto p-4 text-black dark:bg-primary-200  dark:text-secondary-50 ${isFullScreen ? "m-auto w-[672px]" : ""} font-roboto-slab ${roboto_slab.variable}`;

  return (
    <div className={previewContClasses}>
      <DocumentHeading text="PREVIEW" isPreview={true} />
      <div>
        <ReactMarkdown className={markdownClasses}>
          {activeFile?.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto-slab",
});
