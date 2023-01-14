const mongoose=require('mongoose')

const stockIssueSchema= new mongoose.Schema({
    stockIssue:Array,
    date:{
        type:Date,
        default:Date.now
    },
    employeeId:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("StockIssue",stockIssueSchema);