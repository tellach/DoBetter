import {addMessage, getMessage,deleteMessage} from "../controllers/messageController";
import express from 'express';

const messageRouter=express.Router();

messageRouter.post('/',addMessage);
messageRouter.get('/',getMessage);
messageRouter.delete('/:idMessage',deleteMessage);

export default messageRouter;