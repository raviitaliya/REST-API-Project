import connect  from "./src/db";
import express from "express";
import appRouter from "./src/App"
import { config } from "./src/config/config";

const startserver= async()=>{

    await connect();

    const port=config.port || 3000;

    let app = express()

    app.use("/api", appRouter)
    // /api/book

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })

}

startserver();