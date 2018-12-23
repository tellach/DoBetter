const todolisteController=require('../controllers/todolisteController');
import {
    addTodoliste,
    getTodoliste,
    deleteTodoliste,
    updateTodoliste,
    getTodolisteByPseudo
} from "../controllers/todolisteController";

import express from 'express';
const todolisteRouter=express.Router();

todolisteRouter.get('/:pseudo',getTodolisteByPseudo);
todolisteRouter.post('/',addTodoliste);
todolisteRouter.get('/',getTodoliste);
todolisteRouter.delete('/:idTodoliste',deleteTodoliste);
todolisteRouter.put('/:idTodoliste',updateTodoliste);


export default todolisteRouter;