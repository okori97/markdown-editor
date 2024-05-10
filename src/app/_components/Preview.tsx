import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../Context/state";
import styles from "../../styles/Preview.module.css";

export function Preview() {
  const { activeFile, isFullScreen } = useAppContext();

  return (
    <div
      className={
        isFullScreen
          ? "h-lvh w-full justify-center"
          : "hidden h-lvh sm:block sm:w-1/2"
      }
    >
      <DocumentHeading text="PREVIEW" isPreview={true} />
      <div
        className={
          styles.markdown +
          (isFullScreen ? "w-full" : "") +
          " h-full overflow-y-auto p-4" +
          (isFullScreen ? " m-auto w-[672px]" : " ")
        }
      >
        <ReactMarkdown>{activeFile?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
