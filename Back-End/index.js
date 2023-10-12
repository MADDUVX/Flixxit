import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth";
import users from "./routes/users";
import movies from "./routes/movies";
import list from "./routes/list"
import cors from "cors"
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("DB connected")).catch(err=>console.log(err));

app.use(express.json());
app.use(cors());
app.use("/auth",auth);
app.use("/users", users);
app.use("/movies",movies);
app.use("/list",list);

app.listen(3005,()=>console.log("Back End"));