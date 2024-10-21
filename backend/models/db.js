import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // This loads environment variables from your .env file

const mongo_url = process.env.ATLAS_URI;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.log("Mongo Connection Error", err);
    });

