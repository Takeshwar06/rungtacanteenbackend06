const express=require('express');
const { ordergenerate, paymentVarification, getkey } = require('../controllers/paymentController');

const router=express.Router();

router.post("/ordergenerate",ordergenerate);
router.post("/paymentvarification",paymentVarification);
router.get("/getkey",getkey);
module.exports= router;