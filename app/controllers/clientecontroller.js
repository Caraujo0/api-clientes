let cliente=require('../models/cliente');//conexiones a bases de datos o estructuras de trabajo
module.exports={
    readAll:(req, res)=>{
        res.json('{Mensaje:"Todos los clientes"}')
    },
    create:(req, res)=>{
        console.log(req.body);
        res.json('{Mensaje:"Se agregó un cliente"}')
    },
    search:(req, res)=>{
        res.json('{Mensaje:"Buscamos un cliente",id:'+ req.params.id +'}')
    },
    modify:(req, res)=>{
        res.json('{Mensaje:"Se actualizó un cliente",id:'+ req.params.id+ '}')
    }
}//Tareas a realizar en db