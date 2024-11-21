import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const dateIdeaSchema = new Schema({
    dateIdea:{
        type: String,
        required: false
    }, 
    category:{
        type: String,
        required: false
    }
    
})

const DateIdeas = mongoose.model('DateIdeas', dateIdeaSchema, 'DateIdeas')


export default DateIdeas;

