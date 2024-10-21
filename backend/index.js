import express from "express";
const app = express();
import bodyParser from 'body-parser';
import './models/db.js'; // Make sure this file is setting up models correctly
import cors from 'cors';
import authRouter from './routes/authRouter.js'
import productRouter from './routes/productRouter.js'

import dotenv from 'dotenv'; // Only need this once
dotenv.config(); // Load environment variables
const PORT = process.env.PORT || 5555



app.use(bodyParser.json()); 
app.use(cors());
app.use('/auth', authRouter)
app.use('/products', productRouter)

// Define routes
app.get('/test', (request, response) => {
    console.log(request); // Log the request for debugging
    console.log("ATLAS_URI:", process.env.ATLAS_URI); // Log ATLAS_URI from environment
    response.status(234).send('PONG'); // Send one response
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
