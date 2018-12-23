import AdminSchema from "../models/Admin";

import mongoose from 'mongoose'


export const Admin=mongoose.model("Admin",AdminSchema);

const addAdmin = (req,res)=>{res.json({})};
const getAdmin = (req,res)=>{
    res.json({
    admin:"getadmin"
})};
const deleteAdmin = (req,res)=>{res.json({})};
const updateAdmin = (req,res)=>{res.json({})};

export {addAdmin,getAdmin,deleteAdmin,updateAdmin}