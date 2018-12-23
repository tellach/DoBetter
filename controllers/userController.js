import UserSchema from "../models/User";
import mongoose from 'mongoose'

import  {generateTokenForUser} from "../utils/jwt.utils"
import * as bcrypt from "bcrypt";



 const User=mongoose.model("User",UserSchema);

 const getUser = (req,res)=>{
     User.find({},(err,users)=>{
         if(err) res.send(err);
         res.json(users)
     })
 };
 const addUser = (req,res)=>{

     const nom=req.body.nom;
     const prenom=req.body.prenom;
     const email=req.body.email;
     const password=req.body.password;
     const phone=req.body.phone;
     const pseudo=req.body.pseudo;

     User.findOne({pseudo:pseudo},(userFound)=>{
         if (!userFound) {
             bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                 if (err) res.send(err);
                 const newUser = new User({
                     nom:nom,
                     prenom: prenom,
                     email: email,
                     pseudo:pseudo,
                     password: bcryptedPassword,
                     phone: phone
                 });

                 newUser.save((err, user) => {
                     if (err) {
                         res.send(err)

                     }
                     res.json(user)


                 });
             });
         }
         else res.json({'error':'unable to verify user'})

 })
 }
 const deleteUser = (req,res)=>{
     User.remove(
         {_id:req.params.idUser},
         (err)=>{
             if(err){
                 res.send(err)
             }
             res.json({message:'delete successfully'});
         }
     )
 };

 const updateUser = (req,res)=>{
     User.findOneAndUpdate(

         {_id:req.params.idUser},
         req.body,
         {new:true},
         (err,user)=>{
             if(err)res.send(err)
             res.json(user)
         })
 };

 const login=(req,res)=>{
     const pseudo=req.body.pseudo
     const password=req.body.password

    User.findOne({pseudo:pseudo}).then((userFound)=>{
        if (userFound)
        {
            bcrypt.compare(password,userFound.password, (errBcrypt,resBcrypt) => {
                if (resBcrypt){

                    return res.status(200).json({
                        'userId':userFound.id,
                        'token':generateTokenForUser(userFound)
                    })
                }else {
                    return res.status(403).json({'error':'invalide password'});

                }
            })

        }else {
            return res.status(404).json({'error':'user not exist in DB'});

        }
    })
 }

 export {addUser,getUser,deleteUser,updateUser,login}
