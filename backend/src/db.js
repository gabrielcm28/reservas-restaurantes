import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  password: 'gabriel28',
  host: 'localhost',
  port: 5433,
  database: 'reservas'
});
