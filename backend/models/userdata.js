import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:{
        type: String,
        required: true
    }, 
    lastname:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique : true
    },
    linkedin:{
        type: String,
        unique : true
    },
    major:{
        type: String,
        unique: true
    }


    
})

const UserModel = mongoose.model('profile', UserSchema)
export default UserModel;

