// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `markdown-editor_${name}`);

export const documents = createTable(
  "documents",
  {
    id: serial("id").primaryKey(),
    title: varchar("name", { length: 256 }).notNull(),
    content: varchar("content", { length: 2000 }).notNull(),
    createdAt: varchar("created_at", { length: 256 }).notNull(),
  },
  (example) => ({
    nameIndex: index("title_idx").on(example.title),
  }),
);
