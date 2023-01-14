const StockIssue=require("../model/stockIssueModel")

module.exports.addAllStockIssue=async(req,res,next)=>{
    try {
        const {stockIssue,employeeId}=req.body;
        const data=await StockIssue.create({stockIssue,employeeId})
        if(data){
          return  res.status(200).json({msg:"all stock added successfully in data base"})
        }
        else return res.status(400).json({msg:"failed to add stock in data base"})
    } catch (error) {
        next(error)
    }
}

module.exports.getAllStockIssue=async(req,res,next)=>{
    try {
        const {year,month,day,endDay,endMonth,endYear}=req.body;
        const data=await StockIssue.find({
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