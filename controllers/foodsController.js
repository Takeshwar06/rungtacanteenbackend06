const Foods=require("../model/foodModel")

// module.exports.addfood=async(req,res,next)=>{
//   try {
//     const {foodname,foodprice}=req.body;
//     const {foodimg}=req.file;
//    console.log("img  ",foodname);
//     const checkFood=await Foods.findOne({foodname});
   
//     if(checkFood){
//      return res.json({msg:"this food is already used",status:false})
//     }
//     const food=await Foods.create({
//     foodname:foodname,
//     foodprice:foodprice,
//     foodimg:foodimg

//     })
//     console.log(food,req.file);
//     return res.json({status:true,food});
//   } catch (error) {
//     next(error);
//   }
// }
module.exports.updateAvailableFoods=async (req,res,next)=>{
  try {
   
    const {foodAvailable}=req.body;
    let response=await Foods.updateOne({_id:req.params.id},{$set:{foodAvailable:foodAvailable}})
    res.json(response);

  } catch (error) {
   next(error); 
  }
}
module.exports.getAllFoods =async(req,res,next)=>{
   try {
    const foods=await Foods.find()
    return res.json(foods);
   } catch (error) {
    next(error);
    
   }
}