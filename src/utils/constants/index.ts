import type { MDFile } from "types";
import { getCurrentDate } from "../functions";

export const NEW_DOCUMENT: MDFile = {
  title: "New",
  content: "",
  createdAt: getCurrentDate(),
  id: undefined,
};
