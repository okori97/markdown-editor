import type { MDFile } from "types";
import { getCurrentDate } from "../functions";

export const NEW_DOCUMENT: MDFile = {
  title: "New.md",
  content: "",
  createdAt: getCurrentDate(),
};
