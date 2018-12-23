import DefiSchema from "../models/Defi";

import mongoose from 'mongoose'


export const Defi=mongoose.model("Defi",DefiSchema);

const addDefi = (req,res)=>{
    const newDefi =new Defi(req.body);
    newDefi.save((err,defi)=>{
        if(err) res.send(err);
        res.json(defi)
    });
};
const getDefi = (req,res)=>{
    Defi.find({},(err,defi)=>{
        if(err) res.send(err);
        res.json(defi)
    })
};
const deleteDefi = (req,res)=>{
    Defi.remove(
        {_id:req.params.idDefi},
        (err)=>{
            if(err) res.send(err);
            res.json({message:'delete successfully'});
        }
    )
};
const updateDefi = (req,res)=>{
    Defi.findOneAndUpdate(
        {_id:req.params.idDefi},
        req.body,
        {new:true},
        (err,defi)=>{
            if(err)res.send(err)
            res.json(defi)
        })
};

export {addDefi,getDefi,deleteDefi,updateDefi}