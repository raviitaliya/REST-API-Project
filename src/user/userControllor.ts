import express from "express";

const userControllor = express.Router();

userControllor.post("/", async (req, res) => {
  await res.json({
    message: "Register Route",
  });
});

export default userControllor;
