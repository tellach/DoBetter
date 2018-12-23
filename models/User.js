import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const UserSchema=new Schema({
    nom: {
        type:String,
        require:'nom is required'
    },
    prenom: {
        type:String,
        require:'prenom is required'
    },
    email: {
        type:String,
        require:'email is required',
        unique:true
    },
    pseudo: {
        type:String,
        require:'pseudo is required',
        unique: true
    },
    password: {
        type:String,
        require:'password is required'

    },
    phone: {
        type:Number,
        require:'phone is required'
    },

    activities:[String],

    confidentiality:{
        type:Boolean,
        default:false

    }

})

export default UserSchema;
