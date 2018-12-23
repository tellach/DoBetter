//const userController=require('../controllers/userController');
import {addUser, getUser, deleteUser, updateUser, login} from "../controllers/userController";

import express from 'express';
const UserRouter=express.Router();

UserRouter.post('/register',addUser);
UserRouter.post('/login',login);
UserRouter.get('/',getUser);
UserRouter.delete('/:idUser',deleteUser);
UserRouter.put('/:idUser',updateUser);


export default UserRouter;