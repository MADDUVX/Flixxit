import {Router} from "express";
import CryptoJS from "crypto-js";
import VerifyToken from "./verifyToken";
import { User } from "../models/User";
import {mongoose} from "mongoose";

const router = Router();

//UPDATE
router.put("/:id",VerifyToken,async (req,res)=>{
    if(req.user.id === req.params.id ||req.user.isAdmin){
    if(req.body.password){
       req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true});
        res.status(200).json({updatedUser});
    }
    catch(err){
        res.status(500).json(err);

    }
}
else
res.status(500).json("You can only update your account");
})

//DELETE

router.delete("/:id",VerifyToken,async (req,res)=>{
    if(req.user.id === req.params.id ||req.user.isAdmin){
        try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successful");
    }
    catch(err){
        res.status(500).json(err);

    }
}
else
res.status(500).json("You can only delete your account");
});


//GET
router.get("/find/:id",async (req,res)=>{
    if(req.params.id){
        try{
        
        const user=await User.findById(req.params.id);
        const {password, ...info}= user;
        res.status(200).json(...info);
    }
    catch(err){
        res.status(404).json(err);

    }
}
else
res.status(500).json("User not found");
})


//GETALL
router.get("/",VerifyToken,async (req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
        const users = query? await User.find().sort({_id:-1}).limit(2):await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(401).json("Need Admin acess");

    }
}
else
res.status(500).json(err);
});


export default router;