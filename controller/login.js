import { db } from "../connection.js"
export const login=(req,res)=> 

{
   const q ="select * from user where username=?" 
   db .query (q,[req.body.username],(err,data)=>{
    if (err) return res.status(500).send("something went wrong") ;
    if (data.length) return res.status(409).send("user already exists");
    
    const a = "insert into user (`username `,`address`,` email`,`password`) value(?)";
    const value=[req.body.username,req.body.address,req.body.email,req.body.password]
    db.query(a,[value],(err,data)=>{
      if (err) return res.status(500).send("something went wrong") ;
      return res.status(200).send("user registered succesfully")
    })
   })
   
}