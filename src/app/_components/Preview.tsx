import { DocumentHeading } from "./DocumentHeading";
import ReactMarkdown from "react-markdown";

export function Preview({
  file,
}: {
  file: {
    title?: string;
    content?: string;
  };
}) {
  return (
    <div className="h-lvh w-1/2  ">
      <DocumentHeading text="PREVIEW" isPreview={true} />
      <div className=" h-full  overflow-y-auto p-4">
        <ReactMarkdown>{file.content}</ReactMarkdown>
      </div>
    </div>
  );
}
