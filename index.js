// var password = require("password");
// console.log(password(4));

const http = require('http')

http.createServer((req,resp)=>
{
    resp.write("helloo") //to send the data 
    resp.end();
}).listen(4500);

                OR  


function dataControl(req,resp)
{
    resp.write("helloo")
    resp.end();
}
http.createServer(dataControl).listen(4500);

         