const adminController=require('../controllers/adminController');
import {addAdmin, getAdmin,deleteAdmin,updateAdmin} from "../controllers/adminController";

import express from 'express';
const adminRouter=express.Router();

adminRouter.post('/',addAdmin);
adminRouter.get('/',getAdmin);
adminRouter.delete('/',deleteAdmin);
adminRouter.put('/',updateAdmin);


export default adminRouter;