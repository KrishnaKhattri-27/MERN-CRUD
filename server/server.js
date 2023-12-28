const express=require('express')
const routes=require('./routes/userRoutes')
require('dotenv').config()
const app=express()

const port=process.env.PORT


app.use(express.json())

app.use('/user',routes)


app.listen(port,()=>{
    console.log(`server started at ${port}`);
})

//connect to databse
const dbconnect=require("./config/database")
dbconnect();

