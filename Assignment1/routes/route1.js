const express = require('express');
 //import { Express } from 'express';

const path = require('path');


const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
    //res.send('Route 1');
});

router.get('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','user.html'));
    //res.send('Route 2');
});

module.exports = router;