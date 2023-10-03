import jwt from "jsonwebtoken";

const VerifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    console.log(req.headers.authorization)
    const auth = req.headers.authorization.split(" ")[1];
    jwt.verify(auth, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).send("Token is not valid");
      req.user = user;
      next();
    });
  } else res.status(401).send("U'r not an authenticated user");
};

export default VerifyToken;
