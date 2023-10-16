import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import movies from "./routes/movies.js";
import list from "./routes/list.js"
import cors from "cors"
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("DB connected")).catch(err=>console.log(err));

app.get("/",(req,res)=>res.send('<h1 style={"color:green;top:0;left:0;right:0;bottom:0;margin:auto;width:50%;"}>Welcome to StreamIt Back End</h1>'))
app.use(express.json());
app.use(cors());
app.use("/auth",auth);
app.use("/users", users);
app.use("/movies",movies);
app.use("/list",list);

app.listen(3005,()=>console.log("Back End"));