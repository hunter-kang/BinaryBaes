import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const questionnaire = async(req, res) => {
   try{
       const{goingOutFrequency, salary, showerFrequency, codingLanguage, employmentStatus, company} = req.body;


       if (!req.user || !req.user._id) {
           return res.status(401).json({
               message: "Unauthorized access", success: false
           });
       }


       const userId = req.user._id;
       const updatedUser = await UserModel.findByIdAndUpdate(
           userId,
           {
               $set: {
                   goingOutFrequency,
                   salary,
                   showerFrequency,
                   codingLanguage,
                   employmentStatus,
                   company
               }
           },
           { new: true }
       );


       if (!updatedUser) {
           return res.status(404).json({ message: "User not found", success: false });
       }


       res.status(200).json({
           message: "Questionnaire data saved successfully",
           success: true,
           data: updatedUser
       });
   }
   catch (err){
       res.status(500)
       .json({
           message: "Internal server error",
           success : false
       })
   }
}

const saveMatches = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                message: "Unauthorized access",
                success: false,
            });
        }

        const { matches } = req.body; // Array of match IDs or data
        const userId = req.user._id;

        if (!matches || !Array.isArray(matches)) {
            return res.status(400).json({
                message: "Invalid matches data provided",
                success: false,
            });
        }
        // Update the user's matches by appending new matches
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { $addToSet: { matches: { $each: matches } } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        res.status(200).json({
            message: "Matches updated successfully",
            success: true,
            matches: updatedUser.matches, // Return updated matches
        });
    } catch (err) {
        console.error("Error saving matches:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

//get requests here

const home = async(req, res) =>{
    try{
        if (!req.user || !req.user._id){
            return res.status(401).json({
                message: "Unauthorized access, user not found in request",
                success: false
            });
        }
        const userId = req.user._id;
        console.log("User ID from JWT:", userId);
        //no document matches
        //return a list of users and using find to get multiple entries
        const otherUsers = await UserModel.find( { _id: { $ne: userId } }, 'firstname lastname age height school employmentStatus');
        console.log("otherUsers" , otherUsers)

        if (!otherUsers){
            return res.status(404).json({
                message: "none found",
                success: false
            });
        }
        res.status(200).json({
            message: "other users fetched successfully",
            success: true,
            data: otherUsers
        });

    }
    catch (err) {
        console.error("Error fetching profile:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};





const profile = async (req, res) => {
   try {
       if (!req.user || !req.user._id) {
           return res.status(401).json({
               message: "Unauthorized access, user not found in request",
               success: false
           });
       }

       const otherId  = req.params.userId;
       const userId = otherId || req.user?._id;
       

       
       const user = await UserModel.findById(userId, 'email firstname lastname profilePicture linkedin school location pronouns gender major employment salary height ethnicity education frugal age color lookingFor goingOutFrequency showerFrequency codingLanguage employmentStatus company');




       if (!user) {
           return res.status(404).json({
               message: "User not found",
               success: false
           });
       }


       
       res.status(200).json({
           message: "Profile fetched successfully",
           success: true,
           profile: {
               email: user.email,
               firstname: user.firstname,
               lastname: user.lastname,
               profilePicture: user.profilePicture || '', // Include the profile picture
               linkedin: user.linkedin || '',
               school: user.school || '',
               location: user.location || '',
               pronouns: user.pronouns || '',
               gender: user.gender || '',
               major: user.major || '',
               employment: user.employment || '',
               salary: user.salary || '',
               height: user.height || '',
               ethnicity: user.ethnicity || '',
               education: user.education || '',
               frugal: user.frugal || '',
               age: user.age || '',
               color: user.color || '',
               lookingFor: user.lookingFor || '',
               goingOutFrequency: user.goingOutFrequency || '',
               showerFrequency: user.showerFrequency || '',
               codingLanguage: user.codingLanguage || '',
               employmentStatus: user.employmentStatus || '',
               company: user.company || ''
           }
       });
   } catch (err) {
       console.error("Error fetching profile:", err);
       res.status(500).json({
           message: "Internal server error",
           success: false
       });
   }
};

const profilepost = async(req, res) => {
    try{
        const{linkedin, school, location, pronouns, gender, major, salary, height, ethnicity, education, frugal, age, color, lookingFor, goingOutFrequency, showerFrequency, codingLanguage, employmentStatus, company, profilePicture} = req.body;
 
 
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                message: "Unauthorized access", success: false
            });
        }
 
 
        const userId = req.user._id;

         // Check if profile picture is provided and validate base64 encoding
         let updatedData = {
            linkedin,
            school,
            location,
            pronouns,
            gender,
            major,
            salary,
            height,
            ethnicity,
            education,
            frugal,
            age,
            color,
            lookingFor,
            goingOutFrequency,
            showerFrequency,
            codingLanguage,
            employmentStatus,
            company
        };

        // Check if profilePicture is provided and valid, or default to empty string
        if (profilePicture) {
            const base64Regex = /^data:image\/(png|jpeg|jpg);base64,/;
            if (base64Regex.test(profilePicture)) {
                updatedData.profilePicture = profilePicture; // Save base64 image
            } else {
                return res.status(400).json({
                    message: "Invalid base64 image format",
                    success: false
                });
            }
        } else {
            updatedData.profilePicture = ""; // Default to empty string if not provided
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { $set: updatedData },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found", success: false });
        }
 
 
        res.status(200).json({
            message: "Profile data saved successfully",
            success: true,
            data: updatedUser
        });
    }
    catch (err){
        res.status(500)
        .json({
            message: "Internal server error",
            success : false
        })
    }
 }

 const getMatches = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                message: "Unauthorized access",
                success: false,
            });
        }

        const userId = req.user._id;

        const user = await UserModel.findById(userId, 'matches');
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        res.status(200).json({
            message: "Matches retrieved successfully",
            success: true,
            matches: user.matches, // Return the matches
        });
    } catch (err) {
        console.error("Error retrieving matches:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export { questionnaire, profile, home, profilepost, getMatches, saveMatches};
