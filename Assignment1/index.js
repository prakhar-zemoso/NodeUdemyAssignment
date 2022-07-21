const express = require('express');

//import  express  from 'express';
const bodyParser = require('body-parser');
const path = require('path');

const mainRoute = require('./routes/route1');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'staticRef')));

app.use('/shopcart',mainRoute);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404error.html'));
})
app.listen(3000,()=>{
    console.log('hello');
});