import express from "express";

const app= express();

app.post("/book", async(req,res)=>{
    const ab=await res.send({"massage":"hello"});
})


export default app;