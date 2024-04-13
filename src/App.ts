import express from "express";

const r= express.Router();

r.post("/book", async(req,res)=>{
    const ab=await res.send({"massage":"my anme is ravu...."});
    req.body()
})


r.post("/animal", async(req,res)=>{
    const ab=await res.send({"massage":"my name is ravi.."});
})




export default r;