const { addorder, getAllorderForEmployee, getAllOrderForUser, UpdateOrder, UpdateDeleted, UpdateTake, updateReject } = require('../controllers/ordersController');

const router=require('express').Router();

router.post("/addorder",addorder);
router.post("/getAllOrderForEmployee",getAllorderForEmployee);
router.post("/getAllOrderForUser",getAllOrderForUser);
router.post("/updateOrder/:id",UpdateOrder);
router.post("/updateDeleted/:id",UpdateDeleted);
router.post("/updateTake/:id",UpdateTake);
router.post("/updateReject/:id",updateReject);

module.exports=router;