const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello,world from nodejs tejesh");
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running at http://localhost:{port}/`);
});