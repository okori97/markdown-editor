import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../Context/state";
import styles from "../../styles/Preview.module.css";

export function Preview() {
  const { activeFile, isFullScreen } = useAppContext();

  return (
    <div
      className={
        "h-lvh w-1/2  " + (isFullScreen ? "w-full justify-center" : "")
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
