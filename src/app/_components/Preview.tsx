import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../Context/state";

export function Preview({
  file,
}: {
  file: {
    title?: string;
    content?: string;
  };
}) {
  const { activeFile } = useAppContext();
  return (
    <div className="h-lvh w-1/2  ">
      <DocumentHeading text="PREVIEW" isPreview={true} />
      <div className=" h-full  overflow-y-auto p-4">
        <ReactMarkdown>{activeFile?.content}</ReactMarkdown>
      </div>
    </div>
  );
}
