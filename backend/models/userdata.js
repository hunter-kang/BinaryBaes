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
    },
    employment:{
        type: String,
        unique : true
    },
    salary:{
        type: String,
        unique: true
    },
    height:{
        type: String,
        unique: true
    },
    ethnicity:{
        type: String,
        unique: true
    },
    education:{
        type: String,
        unique: true
    },
    outside:{
        type: String,
        unique: true
    },
    so:{
        type: String,
        unique: true
    },
    frugal:{
        type: String,
        unique: true
    },
    shower:{
        type: String,
        unique: true
    },
    tech:{
        type: String,
        unique: true
    },
    cafe:{
        type: String,
        unique: true
    },
    language:{
        type: String,
        unique: true
    },
    color:{
        type: String,
        unique: true
    },
    art:{
        type: String,
        unique: true
    },
    boba:{
        type: String,
        unique: true
    }
})

const UserModel = mongoose.model('profile', UserSchema)
export default UserModel;

