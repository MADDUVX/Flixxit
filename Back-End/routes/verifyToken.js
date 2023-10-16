import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const VerifyToken = (req, res, next) => {
  if (req.headers.authorization) {
        const auth = req.headers.authorization.split(" ")[1];
        const key = process.env.SECRET_KEY;
    jwt.verify(auth, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({auth, key});
      req.user = user;
      next();
    });
  } else res.status(401).send("U'r not an authenticated user");
};

export default VerifyToken;
