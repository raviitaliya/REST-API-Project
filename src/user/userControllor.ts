import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

//create user

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //error handling
  if (!name || !email || !password) {
    const error = createHttpError(400, "all filds are required..");
    return next(error);
  }

  //email verfiy
  const isEmailExist = await userModel.findOne({ email });

  if (isEmailExist) {
    const error = createHttpError(400, "user is alredy exist...");
    return next(error);
  }

  //password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //data store in database

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  })

  

  res.json({ id: newUser._id});
};
export { createUser };
