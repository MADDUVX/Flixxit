import mongoose, { Schema, model } from "mongoose";
import Joi from "joi";

const passowrdRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const regValidate = Joi.object(
  {
    username: Joi.string().min(8).max(15).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp(passowrdRegex)).required(),
  }
   
);

const loginValidate = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().pattern(passwordRegex).required(),
});

const userschema = new Schema({
  username:{type:String, required:true, unique:true,},
  email:{type:String, required:true, unique:true,},
  password:{type:String, required:true, unique:true,},
  profilePic:{type:String, default:""},
  isAdmin:{type:String,default:"false"}
},
{ timestamps: true , versionKey: false }// versionKey used to avoid creating of __v field while creating new documents
);

const User = new model("User", userschema);

export { User, regValidate, loginValidate};
