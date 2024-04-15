import express from "express";
import userControllor from "./userControllor";

const userRouter = express.Router();

userRouter.use("/register",userControllor)


export default userRouter;
