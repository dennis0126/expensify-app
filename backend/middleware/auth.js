import { auth } from "../firebase/firebase.js";

const authMiddleware = async (req, res, next) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error();
    }

    req.user = user;
    console.log(user);
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

export default authMiddleware;
