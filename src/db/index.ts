import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { env } from "src/env.mjs";
import { user } from "./schema";

const migrationConnection = postgres(env.DB_URL, { max: 1 });
const queryConnection = postgres(env.DB_URL);

const db = drizzle(queryConnection);

const main = async () => {
  await migrate(drizzle(migrationConnection), { migrationsFolder: "drizzle" });
  await migrationConnection.end();

  // await db.insert(user).values([{ name: 'alef' }, { name: 'bolk' }]);
  console.log(await db.select().from(user));
  process.exit(0);
};

await main();
