import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const GroupSchema=new Schema({
    name: {
        type:String,
        require:'nom is required'
    },
    confidentiality: {
        type:Boolean,
        default:true
    },
    admin: {
        type:String,
        require:'admin is required'
    },

    members:[String]

})

export default GroupSchema;