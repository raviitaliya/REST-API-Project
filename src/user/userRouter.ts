import express from "express";
import { createUser,finddata } from "./userControllor";


const userRouter = express.Router();

userRouter.post("/register",createUser)

userRouter.get("/data",finddata)



export default userRouter;
