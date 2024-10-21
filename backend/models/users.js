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
    password:{
        type: String,
        required: true,
        unique : true
    },
})

const UserModel = mongoose.model('auth', UserSchema)
export default UserModel;

