const mongoose=require("mongoose");

const orderSchema= new mongoose.Schema({
   foodname:{
      type:String,
      require:true
   },
   foodQuantity:{
      type:Number,
      require:true
   },
   rejected:{
      type:Boolean,
      default:false,
   },
   take:Object,
   auth:Array,
   foodimg:String,
   placed:{
      type:Boolean,
      default:false
   },
   deleted:{
      type:Boolean,
      default:false
   },
   date:{
      type:Date,
      default:Date.now
  },
   foodprice:Number,
   order_id:String,
});
module.exports= mongoose.model("Order",orderSchema);