const {addAllStockEntry, getAllStockEntry}=require("../controllers/stockEntryController")

const router=require('express').Router();

router.post("/addAllStockEntry",addAllStockEntry);
router.post("/getAllStockEntry",getAllStockEntry);

module.exports=router;