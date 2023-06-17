const express=require("express")
const route=express()
route.set("view engine","ejs")
route.get("/",(req,res)=>{
    res.render("home")
})
module.exports=route
