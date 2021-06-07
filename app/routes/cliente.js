let router=require('express').Router();
let clientecontroller=require('../controllers/clientecontroller')
router.get('/',(req, res)=>{ //Hace referencia al controlador 
    //res.json('{Mensaje:"Todos los clientes"}')
    clientecontroller.readAll(req, res);
});
router.get('/:id',(req, res)=>{
    clientecontroller.search(req, res);//Buscar
});
router.put('/:id',(req, res)=>{
    clientecontroller.modify(req, res);//Modificar
});
router.post('/',(req, res)=>{
    clientecontroller.create(req, res);
});
module.exports=router