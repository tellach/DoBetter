import GroupSchema from "../models/Groupe";

import mongoose from 'mongoose'


export const Group=mongoose.model("Group",GroupSchema);

const addGroup = (req,res)=>{res.json({})};
const getGroupsByPseudo = (req,res)=>{res.json({})};
const deleteGroup = (req,res)=>{res.json({})};
const updateGroup = (req,res)=>{res.json({})};

export {addGroup,getGroupsByPseudo,deleteGroup,updateGroup}