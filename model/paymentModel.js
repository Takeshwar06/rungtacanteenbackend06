const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({
    razorpay_payment_id:{
        type:String,
        required:true,
    },
    razorpay_order_id:
    {
        type:String,
        required:true,
    },
    razorpay_signature
    :{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports=mongoose.model("Payment",paymentSchema);