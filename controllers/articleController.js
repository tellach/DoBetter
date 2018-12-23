//import ArticleSchema from "../models/Article";

import mongoose from 'mongoose'

//const Article=mongoose.model("Article",ArticleSchema);


const getArticle = (req,res)=>{//articles
    Article.find({},(err,articles)=>{
        if(err) res.send(err);
        res.json(articles)
    })
};
const addArticle = (req,res)=>{
    const newArticle =new Article(req.body);
    newArticle.save((err,article)=>{
        if(err) res.send(err);
        res.json(article)
    });
};
const deleteArticle = (req,res)=>{
    Article.remove(
        {_id:req.params.idArticle},
        (err)=>{
            if(err) res.send(err);
            res.json({message:'delete successfully'});
        }
    )
};
const updateArticle= (req,res)=>{
    Article.findOneAndUpdate(
        {_id:req.params.idArticle},
        req.body,
        {new:true},
        (err,article)=>{
            if(err)res.send(err)
            res.json(article)
        }
    )
};


export {addArticle,getArticle,deleteArticle,updateArticle}
