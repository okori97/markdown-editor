import { db } from "~/server/db";
import { Editor } from "./_components/Editor";
import { Preview } from "./_components/Preview";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const documents = await db.query.documents.findMany();
  console.log(documents);
  return (
    <main className="flex min-h-screen flex-row ">
      <Editor />
      <Preview file={{ content: "# Hello World" }} />
    </main>
  );
}
