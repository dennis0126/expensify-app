import express from "express";
import { auth } from "../firebase/firebase.js";
import authMiddleware from "../middleware/auth.js";

const router = new express.Router();

// login
router.post("/login", async (req, res) => {});

// anonymous login
router.post("/anonymousLogin", async (req, res) => {
  try {
    const user = await auth.signInAnonymously();
    res.send({
      message: "Login successfully",
      user,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

// logout
router.post("/logout", authMiddleware, async (req, res) => {
  try {
    await auth.signOut();
    res.send({
      message: "Logout successfully",
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

export default router;
