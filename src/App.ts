import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const r = express.Router();
const app = express();
app.use(express.json());


app.use("/api/users",userRouter)

app.use(globalErrorHandler);

export default app;
