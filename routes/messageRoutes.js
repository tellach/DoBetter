const messageController=require('../controllers/messageController');
import {addMessage, getMessage,deleteMessage} from "../controllers/messageController";

import express from 'express';
const adminRouter=express.Router();

adminRouter.post('/',addTodoliste);
adminRouter.get('/',getTodoliste);
adminRouter.delete('/:idMessage',deleteTodoliste);
//adminRouter.put('/:idTodoliste',updateTodoliste);


export default adminRouter;