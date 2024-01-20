const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express(); 
const PORT = 8000;

app.use(express.urlencoded({extended:false}));
//middleware plugin

app.use((req,res,next)=>{
    console.log('hello from middleware 1');
//return res.json({mgs:"hello from middleware 1"});//
next();
});
app.use((req,res,next)=>{
    console.log('hello from middleware 2');
    //return res.end("hey");
    next();
});

//routes
app.get('/api/users',(req,res)=>{
    //res.setHeader('myname','Diya chauhan');
    console.log(req.headers);
    return res.json(users);
});

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id==id);
    return res.json(user);
}).patch((req,res)=>{
   return res.json=({status:"pending"});
})
.delete((req,res)=>{
    return res.json=({status:"pending"});
});


app.post('/api/users/:id' , (req,res)=>{
   return res.json({
    status:"pending"
});
});

// app.patch('/api/users/:id' , (req,res)=>{
//    return res.json({
//     status:"pending"
// });

// });

// app.delete('/api/users/:id' , (req,res)=>{
//    return res.json({
//     status:"pending"
// });

// });


// app.get('/users',(req,res)=>{

// const html = `
// <ul>
//     ${users.map(user =>`<li>${user.first_name}</li>`)}
// </ul>
// `;
// res.send(html)
// });


// app.get('/',(req,res)=>{
//     return res.send('hello from home page');
// });

// app.get('/about',(req,res)=>{
//     return res.send('hello from about page');
// });

// app.listen(8000,()=>console.log("server started!"));