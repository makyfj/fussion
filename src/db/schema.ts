import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";

export const example = mysqlTable("example", {
  id: varchar("id", { length: 191 }).primaryKey().notNull(),
  created_at: timestamp("created_at").notNull().defaultNow().onUpdateNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
});

import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const transaction = pgTable("transaction", {
  id: serial("id").primaryKey(),
  sender: integer("sender_user_id").references(() => user.id),
  recipient: integer("recipient_user_id").references(() => user.id),
});
