let router=require('express').Router();
router.get('/',(req, res)=>{
    res.json('{Mensaje:"Todos las facturas"}')
});
router.get('/id',(req, res)=>{});
router.put('/:id',(req, res)=>{});
router.post('/',(req, res)=>{});
module.exports=router