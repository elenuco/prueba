const{ spawn } = require('child_process');
obj= {Channel: Oyekool}
const childPython = spawn('python', ['algoritmo.py', 'Visit:Oyekool']);
childPython.stdout.on('data', (data)=>{
    console.log(`stdout:${data}`);
});
childPython.stderr.on('data', (data)=>{
   console.error(`stdout:${data}`);
});
childPython.on('data', (data)=>{
    console.error(``);
});