import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user:"postgres",
    password:"08anmol08",
    host:"localhost",
    port:5432,
    database:"jwttutorial"
});

export default pool;