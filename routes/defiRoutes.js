const defiController=require('../controllers/defiController');
import {addDefi,getDefi,deleteDefi,updateDefi} from "../controllers/defiController";

import express from 'express';
const defiRouter=express.Router();

defiRouter.post('/',addDefi);
defiRouter.get('/',getDefi);
defiRouter.delete('/:idDefi',deleteDefi);
defiRouter.put('/:idDefi',updateDefi);


export default defiRouter;