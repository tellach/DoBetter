const defiController=require('../controllers/defiController');
import {addDefi,getDefi,deleteDefi,updateDefi} from "../controllers/defiController";

import express from 'express';
const adminRouter=express.Router();

adminRouter.post('/',addDefi);
adminRouter.get('/',getDefi);
adminRouter.delete('/:idDefi',deleteDefi);
adminRouter.put('/:idDefi',updateDefi);


export default adminRouter;