"use server";
import "server-only";
import { db } from "./db";
import type { MDFile } from "types";
import { documents } from "./db/schema";

export const getAllFiles = async (): Promise<MDFile[]> => {
  const documents: MDFile[] = await db.query.documents.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  console.log("GET", documents);
  return documents;
};

// export const postMarkdown = async (data: MDFile) => {
//   try {
//     await db
//       .insert(documents)
//       .values({
//         title: data.title,
//         content: data.content,
//       })
//       .then((res) => console.log(res));
//   } catch (error) {
//     console.error(error);
//   }
// };
