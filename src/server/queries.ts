"use server";
import "server-only";
import { db } from "./db";
import type { MDFile } from "types";
import { documents } from "./db/schema";
import { eq } from "drizzle-orm";

export const getAllFiles = async (): Promise<MDFile[]> => {
  const documents: MDFile[] = await db.query.documents.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  console.log("IN DB:", documents);
  return documents;
};

export const getFile = async (id: number | undefined) => {
  try {
    console.log("GET", id);
    const document = await db.query.documents.findFirst({
      where: eq(documents.id, id!),
    });

    return document;
  } catch (error) {
    console.error(error);
  }
};

export const saveFile = async (doc: MDFile) => {
  try {
    if (doc == undefined) {
      throw new Error("No document provided");
    }

    if (doc?.id != undefined) {
      const res = await db
        .update(documents)
        .set({
          title: doc.title,
          content: doc.content,
        })
        .where(eq(documents.id, doc.id))
        .returning();

      return res;
    } else {
      const res = await db
        .insert(documents)
        .values({
          title: doc.title,
          content: doc.content,
          createdAt: doc.createdAt,
        })
        .returning();

      return res;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFile = async (id: number | undefined) => {
  try {
    await db.delete(documents).where(eq(documents.id, id!));
  } catch (error) {
    console.error(error);
  }
};
