const mongoose=require("mongoose")

const coinSchema=new mongoose.Schema({
    userId:String,
    coin:Number
})

module.exports=mongoose.model("Coin",coinSchema)