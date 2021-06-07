const express = require('express')
const app = express()
 
const router=require('./routes');
app.use('/api',router)
console.log('Escuchando puerto 3000')
app.listen(3000)