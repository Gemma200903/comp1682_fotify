import express from 'express';
import {createUser, deleteUser, getUser, updateUser} from '../controllers/user.controller.js';



const userRoutes = express.Router();

userRoutes.get('/', getUser)
userRoutes.post('/createUser', createUser)
userRoutes.delete('/deleteUser/:user_id', deleteUser)
userRoutes.put('/updateUser/:user_id', updateUser)


export default userRoutes;