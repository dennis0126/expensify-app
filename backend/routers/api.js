import express from "express";
import userRouter from "./user.js";
import expenseRouter from "./expense.js";

const router = new express.Router();

router.use("/user", userRouter);
router.use("/expense", expenseRouter);

export default router;
