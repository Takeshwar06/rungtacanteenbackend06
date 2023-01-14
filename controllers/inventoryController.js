const Inventory=require('../model/inventoryModel')

module.exports.getinventory=async(req,res,next)=>{
    const {name}=req.body;
    try {
        const data=await Inventory.find({inventoryName:name})
        res.json(data);
    } catch (error) {
        next(error);
    }
}

module.exports.allinventoryitem=async(req,res,next)=>{
    try {
        const data =await Inventory.find();
        res.json(data);
    } catch (error) {
        next(error);
    }
}
module.exports.addinventory=async(req,res,next)=>{
try {
    let {name,quantity,price,expDate}=req.body;
    const data=await Inventory.create({
        inventoryName:name,
        inventoryQuantity:quantity,
        inventoryExpDate:expDate,
        inventoryPrice:price
    })
    if(data){
        res.status(200).json({msg:"inventory add successfully on db"})
    }
    else{
        res.status(400).json({msg:"internal server error"})
    }
} catch (error) {
    next(error);
    
}
}

module.exports.updateinventory=async(req,res,next)=>{

    try {
     let {name,upDatedPrice,upDatedQuantity}=req.body;
      
     if(!upDatedPrice){
        const upDateInv=await Inventory.updateOne({inventoryName:name},
            {$set:{inventoryQuantity:upDatedQuantity}})

            res.status(200).json(upDateInv);
     }
     else{
        const upDateInv=await Inventory.updateOne({inventoryName:name},
            {$set:{inventoryPrice:upDatedPrice,inventoryQuantity:upDatedQuantity}})
         
            res.status(200).json(upDateInv);
     }
    } catch (error) {
        next(error);
    }    
}