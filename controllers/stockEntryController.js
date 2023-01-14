const StockEntry=require("../model/stockEntryModel")

module.exports.addAllStockEntry=async(req,res,next)=>{
    try {
        const {stockEntry}=req.body;
    const data=await StockEntry.create({stockEntry})

    if(data){
       return res.status(200).json({msg:"all stock added successfully in data base"})
    }
    else return res.status(400).json({msg:"failed to add stock in data base"})
    } catch (error) {
        next(error)
    }
}

module.exports.getAllStockEntry=async(req,res,next)=>{
    try {
        const {year,month,day,endDay,endMonth,endYear}=req.body;
        const data=await StockEntry.find({
            date:{
                '$gte':`${year}-${month}-${day}T00:00:00.000Z`,
                '$lte':`${endYear}-${endMonth}-${endDay}T23:59:59.999Z`
            }
        })
        .sort({updatedAt:1})
        res.json(data);
    } catch (error) {
        next(error)
    }
}