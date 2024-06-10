/**
 * Routes For Home both get and put
 *
 */
import  express from 'express';
import { Router } from 'express';
import Main from '../controllers/mainController.js';

const router = Router();

//For Index
router.get("/", Main.index);

//For email post to validate email
router.post("/", Main.postEmail);


export default router;