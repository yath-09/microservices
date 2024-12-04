const express=require('express');
const { route } = require('./routes/user.routes');
const dotenv=require('dotenv')
dotenv.config()



const app=express()

const userRoutes=require('./routes/user.routes')
const cookieParser = require('cookie-parser')


const connect=require('./db/db')
connect()
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/",userRoutes)
module.exports=app;