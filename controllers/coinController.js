const Coin=require("../model/coinModel")

module.exports.addCoin=async(req,res,next)=>{
    try {
        const {coin,userId}=req.body;
        const data=await Coin.create({
            coin,userId
        })
        if(data){
          return  res.status(200).json({msg:"coin added successfully "})
        }
        else return res.status(200).json({msg:"failed to add coin"})
    } catch (error) {
        next(error)
    }
}

module.exports.getCoin=async(req,res,next)=>{
    try {
        const {userId}=req.body;
        const data=await Coin.find({userId})
        res.json(data);
    } catch (error) {
        next(error);
    }
}

module.exports.updateCoin=async(req,res,next)=>{
    try {
        const {updatedCoin,userId}=req.body;
        const data=await Coin.updateOne({userId},
        {$set:{coin:updatedCoin}})
        res.json(data);
    } catch (error) {
        next(error);
    }
}