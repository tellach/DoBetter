const todolisteController=require('../controllers/todolisteController');
import {addTodoliste, getTodoliste,deleteTodoliste,updateTodoliste} from "../controllers/todolisteController";

import express from 'express';
const adminRouter=express.Router();

adminRouter.post('/',addTodoliste);
adminRouter.get('/',getTodoliste);
adminRouter.delete('/:idTodoliste',deleteTodoliste);
adminRouter.put('/:idTodoliste',updateTodoliste);


export default adminRouter;