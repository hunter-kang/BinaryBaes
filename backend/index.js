import express from "express";
const app = express();
import bodyParser from 'body-parser';
import './models/db.js';  
import cors from 'cors';
import authRouter from './routes/authRouter.js'
import productRouter from './routes/productRouter.js'
import DateIdeas from './models/dateIdea.js'; // Adjust the path based on your directory structure


import dotenv from 'dotenv';  
dotenv.config();  
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const PORT = process.env.PORT || 5555



app.use(bodyParser.json()); 
app.use(cors({
    origin: 'http://localhost:3000'   
  }));
app.use('/auth', authRouter)
app.use('/user', productRouter)

app.get('/test', async (request, response) => {
    try {
        console.log("Request received at /test");
        console.log("ATLAS_URI:", process.env.ATLAS_URI);

        // Fetch all documents from the DateIdeas collection
        const dateIdeas = await DateIdeas.find();

        console.log("Date Ideas fetched:", dateIdeas);

        // Respond with the fetched data
        response.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: dateIdeas,
        });
    } catch (error) {
        console.error("Error fetching data from DateIdeas:", error);
        response.status(500).json({
            success: false,
            message: "Error fetching data",
            error: error.message,
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
