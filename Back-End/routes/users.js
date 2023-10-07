import { Router } from "express";
import CryptoJS from "crypto-js";
import VerifyToken from "./verifyToken";
import { User } from "../models/User";


const router = Router();

//UPDATE
router.put("/:id", VerifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json({ updatedUser });
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You can only update your account");
});

//DELETE

router.delete("/:id", VerifyToken, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted successful");
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(403).json("You can only delete your account");
});

//GET
router.get("/find/:id", async (req, res) => {
  if (req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user;
      res.status(200).json(...info);
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(404).json("User not found");
});

//GETALL
router.get("/findall", VerifyToken, async (req, res) => {
  const query = req.query.new; //if new is used in query only the last 5 users are returned
  if (req.user.isAdmin) {
    console.log(typeof(req.user.isAdmin))
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find(); //_id:-1 sorts by newly created documents
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err)
    }
  } else  res.status(401).json("Need Admin acess");;
});

//GetStats

router.get("/stats", async (req, res) => {
  const today = new Date();
  const prevYear = today.setFullYear(today.getFullYear() - 1);
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  try {
    const data = await User.aggregate([
      {
        $project: {
          months: { $month: "$createdAt" },
        }
      },{
        $group: {
          _id: "$months",
          total: { $sum: 1 },
        }}
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
