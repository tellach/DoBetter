import TodolisteSchema from "../models/Todoliste";

import mongoose from 'mongoose'


export const Todoliste=mongoose.model("Todoliste",TodolisteSchema);

const addTodoliste = (req,res)=>{
    const newTodoliste =new Todoliste(req.body);
    newTodoliste.save((err,todoliste)=>{
        if(err) res.send(err);
        res.json(todoliste)
    });
};

const getTodoliste = (req,res)=>{

    Todoliste.find({},(err,todoliste)=>{
        if(err) res.send(err);
        res.json(todoliste);
    })
};
const deleteTodoliste = (req,res)=>{
    Todoliste.remove(
        {_id:req.params.idTodoliste},
        (err)=>{
            if(err) res.send(err);
            res.json({message:'delete successfully'});
        }
    )
};
const updateTodoliste = (req,res)=>{

    Todoliste.findOneAndUpdate(
        {_id:req.params.idTodoliste},
        req.body,
        {new:true},
        (err,todoliste)=>{
            if(err)res.send(err)
            res.json(todoliste)
        }
    )
};

export {addTodoliste,getTodoliste,deleteTodoliste,updateTodoliste}