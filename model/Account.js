

const mongoose=require('mongoose');

const AccountSchema=mongoose.Schema({
    email:{
        type:String},
     
    password:{type:String}
})


const Account=mongoose.model("accounts",AccountSchema);
for (let i = 0; i < 20; i++) {
    Account.create({
        email:"Hongduc935@gmail.com"+i,
        password:"12345"
    })
    
}


module.exports=mongoose.model("accounts",AccountSchema);
