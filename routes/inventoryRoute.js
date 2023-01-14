const {addinventory,getinventory, updateinventory, allinventoryitem}=require("../controllers/inventoryController")
const router=require('express').Router();

router.post("/addinventory",addinventory);
router.post("/updateinventory",updateinventory);
router.post("/getinventory",getinventory);
router.get("/allinventoryitem",allinventoryitem)

module.exports=router;