import mysql, { createPool } from 'mysql2/promise';

//create connection
const pool = createPool({
    host: 'localhost', // địa chỉ host của MYSQL dưới local
    user: 'root', //username
    password: '123456', 
    database: 'node_final',
    port: '3307'
})

export default pool;

