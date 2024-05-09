import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../Context/state";

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
          " h-full overflow-y-auto p-4" +
          (isFullScreen ? " m-auto mt-4 w-[672px]" : " ")
        }
      >
        <ReactMarkdown>{activeFile?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
