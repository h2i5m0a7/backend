import express from 'express'
import register from './route/login.js'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: "*",
    methods:['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'UPDATE']
}));

app.use("/app",register)
app.listen(8800,()=>{
    console.log("App Started")
})