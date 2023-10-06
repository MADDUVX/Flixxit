import { Router } from "express";
import VerifyToken from "./verifyToken";
import Movie from "../models/Movie";


const router = Router();

//CREATE
router.post("/", VerifyToken, async (req, res) => {
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You cannot add movies");
});


//Update
router.put("/:id", VerifyToken, async (req, res) => {
    if(req.user.isAdmin){
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({ updatedMovie});
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You can only update your account");
});


//DELETE
router.delete("/:id", VerifyToken, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("movie deleted successful");
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You cannot delete movie");
});

//GET
router.get("/find/:id", async (req, res) => {
  if (req.params.id) {
    try {
      const user = await Movie.findById(req.params.id);
      const { password, ...info } = user;
      res.status(200).json(...info);
    } catch (err) {
      res.status(404).json(err);
    }
  } else res.status(500).json("User not found");
});

//GetRandom
router.get("/random", VerifyToken, async (req, res) => {
  const type = req.query.type; //if new is used in query only the last 5 users are returned
  let random;
  if (req.user.isAdmin) {
    try {
     if(type==="Series" || type==="series"){
        random = await Movie.aggregate([
            {$match :{isSeries:true}},
            {$sample:{size :1}},
        ]);      
     }
     else{
        random = await Movie.aggregate([
            {$match :{isSeries:false}},
            {$sample:{size :1}}, ])
     }
      res.status(200).json(random);
    } catch (err) {
      res.status(401).json("Need Admin acess");
    }
  } else res.status(500).json(err);
});

export default router;
