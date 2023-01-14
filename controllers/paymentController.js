// const {instance}=require('../index')
const crypto=require('crypto')
const Razorpay=require('razorpay')
const Payment =require("../model/paymentModel")
require("dotenv").config();

module.exports.getkey=(req,res)=>{
    try {
       res.status(200).json({key:process.env.RAZORPAY_API_KEY})
    } catch (error) {
       console.log(error); 
    }
}
module.exports.ordergenerate=async(req,res)=>{
    try {
        const instance=new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET
        })
        const options={
            amount:req.body.amount*100,
            currency:"INR",
        }
        const order=await instance.orders.create(options)

        res.status(200).json({success:true,order})

    } catch (error) {
        console.log(error)
    }
}

module.exports.paymentVarification=async(req,res)=>{
    const{ razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const body=razorpay_order_id +"|"+razorpay_payment_id;

    const expectedSignature = crypto   // after run  sha256 algo must be equal razorpay_signature and expectedSignature
                 .createHmac('sha256',process.env.RAZORPAY_API_SECRET)
                 .update(body.toString())
                 .digest('hex');

    const isAuthentic=expectedSignature===razorpay_signature; // this
    
    if(isAuthentic){
      // store in db
       
     await Payment.create({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
      });

      res.redirect(`${process.env.ORIGIN}?reference=${razorpay_order_id}`)
    }
    else{
        res.status(400).json({
            success:false
        })
    }
}