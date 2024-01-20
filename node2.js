
//const http = require('http');
//const fs = require('fs');
const express = require("express");

const app = express(); 

app.get('/',(req,res)=>{
    return res.send('hello from home page');
});

app.get('/about',(req,res)=>{
    return res.send('hello from about page');
});

app.listen(8000,()=>console.log("server started!"));

// const myserver = http.createServer(app);
// myserver.listen(8000 , ()=>console.log("server started!"));

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'application\json'});//resp to send the data
// resp.write(JSON.stringify({name:'Diya Chauhan' , email:'diyauchauhan@gmail.com'}));
// resp.end();
// }).listen(5001);

// const log = '${Date.now()}:${req.url}New req received\n'
// fs.appendFile("contacts.txt",log,(err,data)=>{
//     switch(req.url){
//         case'/':res.end("Homepage")  ;
//     break
// case '/about':res.end("I am Diya Chauhan"); 
// break;
// deafult:
// res.end("404 not found"); }
// })