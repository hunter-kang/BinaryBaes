/**NO LONGER NEEDED
 * 
 * import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
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
    },
    linkedin:{
        type: String,
        required: false
    },
    major:{
        type: String,
        required: false
    },
    employment:{
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
    outside:{
        type: String,
        required: false
    },
    so:{
        type: String,
        required: false
    },
    frugal:{
        type: String,
        required: false
    },
    shower:{
        type: String,
        required: false
    },
    tech:{
        type: String,
        required: false
    },
    cafe:{
        type: String,
        required: false
    },
    language:{
        type: String,
        required: false
    },
    color:{
        type: String,
        required: false
    },
    art:{
        type: String,
        required: false
    },
    boba:{
        type: String,
        required: false
    }, 
    goingOutFrequency:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    showerFrequency:{
        type: String,
        required: true
    },
    codingLanguage:{
        type: String,
        required: true
    },
    employmentStatus:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: false
    }


})

const Profile = mongoose.model('profile', profileSchema)
export default Profile;
**/
