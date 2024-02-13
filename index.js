const express=require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));


const data=[
    {id:1,name:"iphone 14",price:3000,isActive:true,imageUrl:'work2.jpg'},
    {id:2,name:"iphone 15",price:4000,isActive:true,imageUrl:'work3.jpg'},
    {id:3,name:"iphone 16",price:5000,isActive:true,imageUrl:'work4.jpg'},
]
app.use("/products/:id",function(req,res){
    const urun=data.find(u=>u.id==req.params.id);
    res.render("product_details",urun);
});
app.use("/products",function(req,res){
    
    res.render("products",{
        urunler:data
    })
});

app.use("/",function(req,res){
    res.render("index");
});
app.listen(3000,()=>{
    console.log("listenin on port 3000");
});

