// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";
import { env } from "src/env.mjs";

export default {
  schema: ["./src/db/auth.ts", "./src/db/schema.ts"],
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DB_URL,
  },
} satisfies Config;
