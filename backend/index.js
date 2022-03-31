const express = require('express')
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/UserRoute")
const cors=require("cors");
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/chat",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Mongodb connected Sucessfully");
    }
});


app.use(cors())
app.get("/", (req, res) => {
    res.send("hello")
});

app.use("/auth", authRoute);
app.listen(8000, ()=>{
    console.log("Backend server is running ")
});