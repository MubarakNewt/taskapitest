import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres', // process.env.DB_USER,      
    host: 'localhost', // process.env.DB_HOST,      
    database: 'taskman', // process.env.DB_NAME, 
    password: 'abcd', // process.env.DB_PASSWORD, 
    port: 5432 // process.env.DB_PORT    
});

console.log(typeof process.env.DB_PASSWORD, 'hshshs')

export default pool;
