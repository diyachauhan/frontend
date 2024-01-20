const fs = require("fs");

//blocking
console.log("1")
const result = fs.readFileSync("contacts.txt","utf-8");
console.log(result);
console.log("2");

//non blocking
console.log("1")
fs.readFile("contacts.txt","utf-8" , (err,result)=>{
    console.log(result);
});
console.log("2");

//http 
const log = '${Date.now()}:${req.url}New req received\n'
fs.appendFile("contacts.txt",log,(err,data)=>{
    switch(req.url){
        case'/':res.end("Homepage")  ;
    break
case '/about':res.end("I am Diya Chauhan"); 
break;
deafult:
res.end("404 not found"); }
})

