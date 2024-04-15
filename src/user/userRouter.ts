import express from "express";
import { createUser } from "./userControllor";

const userRouter = express.Router();

userRouter.post("/register",createUser)




export default userRouter;
