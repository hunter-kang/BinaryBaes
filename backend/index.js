import express from "express";
const app = express();
import bodyParser from 'body-parser';
import './models/db.js';  
import cors from 'cors';
import authRouter from './routes/authRouter.js'
import productRouter from './routes/productRouter.js'

import dotenv from 'dotenv';  
dotenv.config();  
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const PORT = process.env.PORT || 5555



app.use(bodyParser.json()); 
app.use(cors({
    origin: 'http://localhost:3000'   
  }));
app.use('/auth', authRouter)
app.use('/products', productRouter)

app.get('/test', (request, response) => {
    console.log(request);  
    console.log("ATLAS_URI:", process.env.ATLAS_URI);  
    response.status(234).send('PONG');  
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
