
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "../middlewares/globalErrorHandler";

const r = express.Router();
const app = express();


r.get("/",(res,req)=>{
    const error = createHttpError(400,"somthing went wrong..")
    throw error;
    
    req.json({"massge":"hellow"})
})


app.use(globalErrorHandler);

export default r;
