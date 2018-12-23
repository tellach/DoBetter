import {addGroup, getGroupsByPseudo,deleteGroup,updateGroup} from "../controllers/groupeController";

import express from 'express';
const adminRouter=express.Router();

adminRouter.post('/',addGroup);
adminRouter.get('/',getGroupsByPseudo);
adminRouter.delete('/',deleteGroup);
adminRouter.put('/',updateGroup);


export default adminRouter;