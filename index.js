const{ spawn } = require('child_process');
const childPython = spawn('python', ['algoritmo.py', 'str1', 'str2']);
let salida=[];
childPython.stdout.on('data', (data)=>{
    console.log(`stdout:${data}`);
});
childPython.stderr.on('data', (data)=>{
   console.error(`stdout:${data}`);
});
childPython.on('close', callback=>{
    console.info(salida.toString())
});
