import postgres from 'postgres';

const connectionString =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    'Missing database connection string. Set POSTGRES_URL_NON_POOLING or POSTGRES_URL.',
  );
}

const sslOptions = connectionString.includes('sslmode=require')
  ? { rejectUnauthorized: false }
  : undefined;

export const sql = postgres(connectionString, {
  ssl: sslOptions,
});
