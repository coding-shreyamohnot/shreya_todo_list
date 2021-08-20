var express = require ("express");
var app = express();
app.get('/',(req,res)=>{
    res.send("hi there")
});
app.get('/name',(req,res)=>{
    res.send("name is shreya")
});

app.get('/ab?cd',(req,res)=>{
    res.send("this response is regarding ab?cd") //the requests for /abcd and /acd are handled here 
});

// app.get('/ab*cd',(req,res)=>{
//     res.send("this response is regarding ab*cd")// * u can replace with infinite no. of letters
// });

app.get('/ab+cd',(req,res)=>{
    res.send("this response is regarding ab cd")// in this u can any no. of preceeding character like in this b
});

app.get('/a(dc)?be',(req,res)=>{
    res.send("this response is regarding a(dc)?be") //in this if u want to put dc or not is ur choice cuz of the ?
});

app.get('/name/:my_name/standard/:my_standard',(req,res)=>{
    res.send(req.params) //in this after : that is a variable name and u wil assign value to it in the url.
});
app.listen(8000,()=>console.log("server is running"));
