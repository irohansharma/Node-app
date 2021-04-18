const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.set('view engine' , 'ejs');

var id1=[1,2,3,4];
var college=["IIT","VIT","DTU","NSUIT"];
var year=["1990","2000","2005","2007"];
var state=["Bombay","Tamil Nadu","Delhi","Delhi"];

let info = new Date();
var day = info.getDay();

app.use(express.static("public"));

app.get("/",function(req,res){

  //if(day==0||day==6)
  res.render('list',{id1:id1,college:college,year:year,state:state});

})

app.listen(process.env.PORT ||3000,()=>{console.log("Started")});
