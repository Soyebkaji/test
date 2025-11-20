const express=require('express');
const port=5000;
const app=express();

app.get('/',(req,res)=>{
    res.send("hello i am on server")
})

app.listen(port,()=>{
    console.log("server is running");
})