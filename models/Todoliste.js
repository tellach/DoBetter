import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const TodolisteSchema=new Schema({
    pseudo: {
        type:String,
        require:'nom is required'
    },
    content:{
        type: String,
        require: 'content is required'
    }

})

export default TodolisteSchema;
