const mongoose=require('mongoose')

const StockEntrySchema= new mongoose.Schema({
    stockEntry:{
        type:Array,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports=mongoose.model("StockEntry",StockEntrySchema);