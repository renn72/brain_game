import pg from 'pg'

if (process.env.PRODUCTION) {
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  db = new Pool({
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
  });
}

export default db;