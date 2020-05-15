//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());






app.get('/',function(req,res){
  res.send('this is my Cook App');
});





app.listen(process.env.PORT||3000,function(){
  console.log('app is running on 3000');
});
