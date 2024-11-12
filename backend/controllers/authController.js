import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signup = async (req, res) =>{
    console.log("yay")
    try{
        const{firstname, lastname, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message: 'User is already exist you can login', success: false})
        }
        const userModel = new UserModel({firstname, lastname, email, password})
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        res.status(201)
            .json({
                message : "Signup successful",
                success: true
            })
    }
    catch (err){
        res.status(500)
        .json({
            message: "Internal server error",
            success : false
        })
    }
}

const login = async (req, res) =>{
    try{
        const{email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403)
            .json({message: 'Auth failed email or password is wrong', success: false})
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if(!isPassEqual){
            return res.status(403)
                .json({message: errorMsg, success: false})
        }
        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn : '24h'}
        )
        res.status(201)
            .json({
                message : "Login successful",
                success: true,
                jwtToken,
                email, 
                name: user.firstname
            })
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

         
        const user = await UserModel.findById(userId, 'email linkedin major employment salary height ethnicity education outside so frugal shower tech cafe language color art boba');

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
                boba: user.boba || ''
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

export { signup, login, profile };
