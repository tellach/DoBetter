import MessageSchema from "../models/Message";

import mongoose from 'mongoose'


const Message=mongoose.model("Message",MessageSchema);

 const addMessage = (req,res)=>{res.json({})};
 const getMessage = (req,res)=>{res.json({})};
 const deleteMessage = (req,res)=>{res.json({})};

export {addMessage,getMessage,deleteMessage}