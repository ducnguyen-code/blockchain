const express=require('express')
require('dotenv').config();

const app=express();
const Account=require('./model/Account')
const connectDB=require('./config/db');
app.use(express.json());
connectDB();
app.use("/account",(req,res,next)=>{

    

    Account.find({}).then((data)=>{
        res.json(data)
    })  
    .catch(
        (err)=>{console.log("error");}
    )

})
const PORT=process.env.PORT



app.listen(PORT,()=>console.log(`SEVER RUNING ON PORT ${PORT}`));