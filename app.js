const express=require("express");
const bodyparser=require("body-parser");
const app=express();
//create a view folder and a file "list.ejs" inside it.
app.set("view engine","ejs");// this line should be just below the above line.
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let items=["Perform morning routine","Breakfast"];
app.get("/",function(req,res){
    let today=new Date();
    let currentday=today.getDay();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day=today.toLocaleString("hi-US",options);
    res.render("list",{kindOday:day,newListitems:items});
});
app.post("/",function(req,res){
   let todo=req.body.newitem;
   items.push(todo);
   res.redirect("/");
})
app.listen(3000,function(){
    console.log("server started on port 3000...");
});