import express from 'express'
import pool from './db.js';
import { OK, INTERNAL_SERVER } from './const.js';
const app = express ();

// Thêm middleware để đọc data json
app.use(express.json()); //chuyển string sang json

//first test get user from data
app.get('/users', async(req, res)=>{
    try {
        const [data] = await pool.query(`
            
            SELECT * FROM users
            LIMIT 1
    
        `);
        res.status(OK).json(data)
    } catch (error) {

        res.status(INTERNAL_SERVER).json({message: 'error'})

    }
})


// define port
/**
 * param 1: port
 * param 2: callback function
 */
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})