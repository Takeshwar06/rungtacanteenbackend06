const { addfood, getAllFoods ,updateAvailableFoods} = require('../controllers/foodsController');
const Foods=require("../model/foodModel")
const multer=require('multer')
const upload=multer({dest:"../client/public/upload/"})
//, login, getAllUsers   //
const router=require('express').Router();

router.post("/addfood",upload.single("foodimg"),async(req,res,next)=>{
    try {
      const {foodname,foodprice}=req.body;
    //   const {foodimg}=req.file;
     let img=req.file.filename
      const checkFood=await Foods.findOne({foodname});
     
      if(checkFood){
       return res.json({msg:"this food is already added",status:false})
      }
      const food=await Foods.create({
      foodname:foodname,
      foodprice:foodprice,
      foodimg:img,
      foodAvailable:false
  
     
      })
      return res.json({status:true,food});
    } catch (error) {
      next(error);
    }
  })
// router.post("/login",login)
router.get("/getAllFoods",getAllFoods)
router.post("/updateAvailable/:id",updateAvailableFoods)

module.exports=router;