const {addAllStockIssue, getAllStockIssue}=require('../controllers/stockIssueController')
const router=require('express').Router();

router.post("/addAllStockIssue",addAllStockIssue);
router.post("/getAllStockIssue",getAllStockIssue);

module.exports=router;