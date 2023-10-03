import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth";
import update from "./routes/users";
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("DB connected")).catch(err=>console.log(err));

app.use(express.json());
app.use("/",auth);
app.use("/up", update);

app.listen(3005,()=>console.log("Back End"));