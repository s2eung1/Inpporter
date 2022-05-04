// [LOAD PACKAGE]
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");

// [CONFIGURE APP TO USE bodyParser and cors]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// [CONFIGURE SERVER PORT]
const port = process.env.PORT||5000;

// [RUN SERVER]
app.listen(port,()=>console.log(`Listening on port ${port}`));

// [CONNECT MONGOOSE]
mongoose.connect('mongodb+srv://eunjeong:dmswjd1225@inpporter.eurev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB Connted...'))
.catch(err=>console.log(err))

const User = require("./models/user");

app.get('/',(req,res)=>res.send("hi"));

app.post("/api/users/register",(req,res)=>{
    console.log(req.body);
    const user = new User(req.body);

    user.save((err,user)=>{
        if(err){return console.error(err);}
        return console.log(`success ${user}`);
    })
});

app.get("/api/user/registerread",(req,res)=>{
    User.find();
})
