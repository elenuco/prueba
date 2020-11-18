const express = require("express")
const app= express()
const path= require('path')
//app.use(express(path.join( __dirname, "public")))

app.use('/data', require('./routes/'))



app.listen('3000', ()=>{
    console.log("Servidor en 3000")
})
//const{ spawn } = require('child_process');
//const childPython = spawn('python', ['algoritmo.py', 'str1', 'str2']);
//let salida=[];
//childPython.stdout.on('data', (data)=>{
    //console.log(`stdout:${data}`);
//});
//childPython.stderr.on('data', (data)=>{
  // console.error(`stdout:${data}`);
//});
//childPython.on('close', callback=>{
   // console.info(salida.toString())
//});
