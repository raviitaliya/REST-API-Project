
import connect  from "./src/db";
import express from "express";
import appRouter from "./src/App"

const startserver= async()=>{

    await connect();

    const port=process.env.PORT || 3000;

    let app = express()

    app.use("/api", appRouter)
    // /api/book

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })

}

startserver();