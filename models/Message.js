import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const MessageSchema=new Schema({

    sender: {
        type:String,
        require:'nom is required'
    },
    receiver: {
        type:[String],
        require:'nom is required'
    },

    content:{
        type: String,
        require: 'content is required'
    },

    CreatedDate:{
        type:Date,
        default:Date.now()
    }

})

export default MessageSchema;
