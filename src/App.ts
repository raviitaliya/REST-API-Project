
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";

const r = express.Router();
const app = express();

// r.post("/book", async (req, res) => {
//     const error = createHttpError(400,"somthing went wrong..")
//     throw error;

//   const ab = await res.send({ massage: "my anme is ravu...." });
//   req.body();
// });

r.get("/",(res,req)=>{
    const error = createHttpError(400,"somthing went wrong..")
    throw error;
    
    req.json({"massge":"hellow"})
})


app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: err.stack,
  });
});

export default r;
