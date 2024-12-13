import express from 'express';
import userRoutes from './user.router.js';
import postRoutes from './post.router.js';
import authRoutes from './auth.router.js';

// tạo object router tổng
const rootRoutes = express.Router();

rootRoutes.use("/auth", authRoutes);

rootRoutes.use("/users", userRoutes);
rootRoutes.use("/posts", postRoutes);

// export rootRoutes cho server.js dùng
export default rootRoutes;