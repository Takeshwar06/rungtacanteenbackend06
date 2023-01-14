const mongoose=require("mongoose");

const foodSchema= new mongoose.Schema({
    foodname:{
        type:String,
        required:true,
        min:2,
        max:20,
    },
   foodprice:{
    type:Number,
    required:true
   },
   foodimg:{
    type:String
   },
   foodAvailable:{
      type:Boolean,
      default:false
   }
});
module.exports= mongoose.model("Foods",foodSchema);