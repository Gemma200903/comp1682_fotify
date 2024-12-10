import mysql, { createPool } from 'mysql2/promise';

//create connection
const pool = createPool({
    host: 'localhost', // địa chỉ host của MYSQL dưới local
    user: 'root', //username
    password: '123456', 
    database: 'fotify',
    port: '3307'
})

export default pool;

