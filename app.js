const express=require('express');
const bodyParser=require('bodyParser');
const mysql=require('mysql');

const app=express();

const port=3000;
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'kutuphane'
});

db.connect((err)=>{if(err) throw err; console.log('mysql baglantısı sağlanmıştır')});


