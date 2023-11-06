import express from "express";
import router from "./route/login.js";
const app= express ();
app.use(express.json())
app.use("/app",router) 
app.listen(8800,()=> {
    console.log("app started")
})
