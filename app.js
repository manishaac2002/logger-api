import express from "express";
import dotenv from "dotenv";

dotenv.config(); 

const application = express();
const port = process.env.PORT || 4000; 

application.get("/user", (req, res) => {
  res.send("I'm user");
});

application.get("/employee", (req, res) => {
  res.send("Employee details");
});

application.get("/login", (req, res) => {
  res.send("This is login api");
});

application.get("/signup", (req, res) => {
  res.send("This is signup api");
});

application.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
