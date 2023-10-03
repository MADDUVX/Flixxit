import {Router} from "express";
import CryptoJS from "crypto-js";
import VerifyToken from "./verifyToken";
import { User } from "../models/User";

const router = Router();

router.put("/:id",VerifyToken,async (req,res)=>{
if(req.user._id === req.params.id ||req.user.isAdmin){
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

export default router;