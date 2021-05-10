import express from "express";
import database from "../firebase/firebase.js";
import authMiddleware from "../middleware/auth.js";

const router = new express.Router();

// get all expenses
router.get("/", authMiddleware, async (req, res) => {
  const snapshot = await database.ref(`users/${uid}/expenses`).once("value");

  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val(),
    });
  });
  res.send(expenses);
});

// create an expense
router.post("/", (req, res) => {
  res.send("create exp");
});

// edit an expense
router.patch("/:id", (req, res) => {
  res.send("update exp");
});

export default router;
