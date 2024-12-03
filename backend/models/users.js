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
    linkedin:{
        type: String,
        required: false
    },
    school:{
        type: String,
        required: false
    },
    location:{
        type: String,
        required: false
    },
    pronouns:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    },
    orientation:{
        type: String,
        required: false
    },
    major:{
        type: String,
        required: false
    },
    salary:{
        type: String,
        required: false
    },
    height:{
        type: String,
        required: false
    },
    ethnicity:{
        type: String,
        required: false
    },
    education:{
        type: String,
        required: false
    },
    frugal:{
        type: String,
        required: false
    },
    age:{
        type: String,
        required: false
    },
    color:{
        type: String,
        required: false
    },
    lookingFor:{
        type: String,
        required: false
    },
    goingOutFrequency:{
        type: String
    },
    salary:{
        type: String
    },
    showerFrequency:{
        type: String
    },
    codingLanguage:{
        type: String
    },
    employmentStatus:{
        type: String
    },
    company:{
        type: String
    },
    matches: [
        {
        _id: { type: String, required: true },  // or String, depending on your id type
        firstname: { type: String, required: true },
        }
    ],
    profilePicture: { // Add this field to store the profile picture URL
        type: String,
        required: false
    }
})

const UserModel = mongoose.model('auth', UserSchema)
export default UserModel;

