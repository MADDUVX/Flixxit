import { Router } from "express";
import {User, regValidate} from "../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register",async (req, res) => {
    const { error, value } = regValidate.validate(req.body);
    if (error) return res.status(400).send(error.message);
  const regUser = new User({
    username: req.body.username,
    email:req.body.email,
    password:CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString()
  });
try{
  const resp = await regUser.save()
  res.status(201).send(resp);
  }
  catch(error){
        res.status(500).send("Error from server");
  }

});


//Login

router.post("/login",async (req,res)=>{
    try{
        const findUser = await User.findOne({"email":req.body.email});   

        const {password, ...info }= findUser;
        var bytes  = CryptoJS.AES.decrypt(password, process.env.Secret_Key);
        var origPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(findUser && origPassword === req.body.password){
            const auth = jwt.sign(req.body, process.env.Secret_Key,{expiresIn:"1m"});
            res.send({findUser,auth});
        }
        else
        res.sendStatus(404);
        
    }
    catch(err){
        res.status(500).json(err)
    }

})

export default router;
