import { Editor } from "./_components/Editor";
import { Preview } from "./_components/Preview";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-row ">
      <Editor />
      <Preview file={{ content: "# Hello World" }} />
    </main>
  );
}
