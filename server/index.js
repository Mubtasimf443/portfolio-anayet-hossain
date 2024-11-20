/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
const express =require('express');
const path =require('path');


const app=express();
app.use(express.static(path.resolve(__dirname, './public')))
app.get('/', (req,res)=> res.sendFile(path.join(__dirname, './index.html')));
app.get('*', (req,res)=> {
    res.status(404).send(`<h1>404, There is no such page as ${req.baseUrl}</h1>` )
})
app.listen(3000)