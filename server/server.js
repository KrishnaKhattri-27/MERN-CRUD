const express=require('express')
const routes=require('./routes/userRoutes')
const cors=require('cors')
require('dotenv').config()
const app=express()
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const port=process.env.PORT


app.use(express.json())

app.use('/user',routes)


app.listen(port,()=>{
    console.log(`server started at ${port}`);
})

app.get("/",(req,res)=>{
res.send("<h1>krishna</h1>")
})

//connect to databse
const dbconnect=require("./config/database")
dbconnect();

