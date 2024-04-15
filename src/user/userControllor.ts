import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //error handling
  if (!name || !email || !password) {
    const error = createHttpError(400, "all filds are required..");
    return next(error);
  }

  

  res.json({ massage: "user created " });
};
export { createUser };
