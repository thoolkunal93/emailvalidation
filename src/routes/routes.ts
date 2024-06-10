import  express from 'express';
import { Router } from 'express';
import Main from '../controllers/mainController.js';

const router = Router();

// const mainController = require('./../controllers/mainController');

// Home page route.
router.get("/", Main.index);
router.post("/", Main.postEmail);

//Post Route
// router.post("/", mainController.result);


export default router