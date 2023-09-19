//importar
var express = require('express');
var mongoose = require('mongoose');
var port = process.env.port || 4201;
//inicializar
var app = express();

mongoose.connect=('mongodb://127.0.0.1:27017/tortasmarife',(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        //ponerlo en escucha
        app.listen(port,function(){
        console.log('servidor corriendo como tortuguita ' +port);
    });
    }
});



//exportar
module.exports = app;