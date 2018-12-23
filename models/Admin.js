import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const AdminSchema=new Schema({
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
        require:'email is required'
    },
    password: {
        type:String,
        require:'password is required'

    }

})

export default AdminSchema;