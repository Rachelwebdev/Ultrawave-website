import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config()

import contactRoute from "./Routes/contact.js";

const app = express();


app.use(express.json());

app.use(cors({
    origin:'https://ultrawave.vercel.app',
    credentials:true,    
    optionSuccessStatus:200
}));

app.use("/customer",contactRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});