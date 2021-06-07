let router=require('express').Router();
let cliente=require('./cliente');
router.use('/cliente',cliente)

//let factura=require('./factura');
//router.use('./factura',factura);



module.exports=router;//Nos dice como se van a atender las cosas 