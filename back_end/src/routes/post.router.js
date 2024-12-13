import express from 'express';
import { getListPost } from '../controllers/post.controller.js';

const postRoutes = express.Router();

postRoutes.get("/getPosts", getListPost);

export default postRoutes;