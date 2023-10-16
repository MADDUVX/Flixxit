import { Router } from "express";
import VerifyToken from "./verifyToken";
import List from "../models/List.js";


const router = Router();

//CREATE
router.post("/", VerifyToken, async (req, res) => {
    if(req.user.isAdmin){
        const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You cannot add movies");
});


//DELETE
router.delete("/:id", VerifyToken, async (req, res) => {
    if(req.user.isAdmin){
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("list deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You cannot add movies");
});

//GET
router.get("/", VerifyToken, async (req, res) => {
        const typeQuery= req.query.type;
        const genreQuery = req.query.genre;
        let list=[];
    try {
      if(typeQuery){
        if(genreQuery){
            list = await List.aggregate([
                {$sample:{size:10}},
                {$match:{type:typeQuery, genre:genreQuery}}
            ]);
        }
        else{
            list = await List.aggregate([
                {$sample:{size:10}},
                {$match:{type:typeQuery}}
            ]);
        }}
        else{
            list = await List.aggregate([{$sample:{size:10}}])
        }
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
  
});


export default router;