const {addCoin, updateCoin, getCoin}=require("../controllers/coinController")

const router=require("express").Router();

router.post("/addCoin",addCoin);
router.post("/getCoin",getCoin);
router.post("/updateCoin",updateCoin);

module.exports=router;
