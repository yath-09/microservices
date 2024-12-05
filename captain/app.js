const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const app=express()
app.use(express.json())
const connect=require('./db/db')
connect()

const captainRoutes=require('./routes/captain.routes')
const cookieParser = require('cookie-parser')


app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const rabbitMq=require('./service/rabbit')
rabbitMq.connect();

app.use("/",captainRoutes)
module.exports=app;