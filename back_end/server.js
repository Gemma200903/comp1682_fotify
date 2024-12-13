import express from 'express'
import rootRoutes from './src/routes/root.router.js';
import cors from 'cors';


const app = express ();

// Thêm middleware để đọc data json
app.use(express.json()); //chuyển string sang json

// Thêm middleware cors để FE có thể call API tới BE
app.use(cors());

// import rootRoutes
app.use(rootRoutes);





// define port
/**
 * param 1: port
 * param 2: callback function
 */
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})