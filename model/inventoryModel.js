const mongoose=require('mongoose')

const inventorySchema=new mongoose.Schema({
    inventoryName:{
        type:String,
        require:true,
    },
    inventoryQuantity:{
        type:Number,
        require:true
    },
    inventoryPrice:{
        
    },
    inventoryExpDate:{
        type:Date,
        default:Date.now
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Inventory",inventorySchema);