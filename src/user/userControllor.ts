import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { user } from "./userTypes";

//create user

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  //error handling
  if (!name || !email || !password) {
    const error = createHttpError(400, "all filds are required..");
    return next(error);
  }

  //email verfiy
  try {
    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
      const error = createHttpError(400, "user is alredy exist...");
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "Error whaile getting user..."));
  }

  //password hashing

  const hashedPassword = await bcrypt.hash(password, 10);

  //data store in database

  let newUser: user;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "Error whaile hashing password..."));
  }

  //jwt token sign

  try {
    
    const token = sign({ sub: newUser._id }, config.jwttoken as string, {
      expiresIn: "1d",
    });
  
    res.json({ acssestoken: token });

  } catch (error) {
    return next(createHttpError(500, "Error whaile signing user..."));
  }
};
export { createUser };
