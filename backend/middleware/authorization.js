import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authorize = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("Not authorized");
    }

    // ✅ verify token using secret key from .env
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;

    // ✅ move to next route or controller
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not authorized");
  }
};

export default authorize;
