import app from "./app";
import { pool } from "@workspace/db";
import { seedInsights } from "./seed-insights";

async function runMigrations() {
  if (!process.env["DATABASE_URL"]) {
    console.warn("DATABASE_URL not set — skipping migrations");
    return;
  }
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id serial PRIMARY KEY,
        name text NOT NULL,
        email text NOT NULL,
        company text,
        phone text,
        service text,
        message text NOT NULL,
        created_at timestamp DEFAULT now() NOT NULL
      );

      ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone text;
      ALTER TABLE leads ADD COLUMN IF NOT EXISTS service text;

      CREATE TABLE IF NOT EXISTS insights (
        id serial PRIMARY KEY,
        title text NOT NULL,
        slug text NOT NULL UNIQUE,
        excerpt text NOT NULL,
        content text NOT NULL,
        category text NOT NULL,
        image_url text,
        published_at timestamp DEFAULT now() NOT NULL
      );
    `);
    console.log("Migrations applied successfully");
    await seedInsights(client);
  } finally {
    client.release();
  }
}

const rawPort = process.env["PORT"];

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

runMigrations()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Migration failed, starting server anyway:", err);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });
