import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const DefiSchema=new Schema({
    pseudo: {
        type:String,
        require:'nom is required'
    },
    content:{
        type: String,
        require: 'content is required'
    },
    visibility:{
        type:String,
        default:false
    },
    etat:{
        type:String,
        require:'etat is required'
    }

})

export default DefiSchema;
