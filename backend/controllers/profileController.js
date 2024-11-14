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

const profile = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                message: "Unauthorized access, user not found in request",
                success: false
            });
        }

        const userId = req.user._id;
        console.log("User ID from JWT:", userId);

         
        const user = await UserModel.findById(userId, 'email linkedin major employment salary height ethnicity education outside so frugal shower tech cafe language color art boba codingLanguage company employmentStatus goingOutFrequency showerFrequency');


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
                linkedin: user.linkedin || '',
                major: user.major || '',
                employment: user.employment || '',
                salary: user.salary || '',
                height: user.height || '',
                ethnicity: user.ethnicity || '',
                education: user.education || '',
                outside: user.outside || '',
                so: user.so || '',
                frugal: user.frugal || '',
                shower: user.shower || '',
                tech: user.tech || '',
                cafe: user.cafe || '',
                language: user.language || '',
                color: user.color || '',
                art: user.art || '',
                boba: user.boba || '',
                goingOutFrequency: user.goingOutFrequency || '',
                salary: user.salary || '',
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

export { questionnaire, profile};