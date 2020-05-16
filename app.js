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


//coonet to mongodb
mongoose.connect("mongodb://localhost:27017/cookBookDB", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);

//database schema (Table)
const foodSchema = new mongoose.Schema ({
  recipeName:{type:String},
  recipeDescription:{type:String},
  recipeCuisine:{type:String},
  //array of Users
  user:[
    {
    name:{type:String},
    country:{type:String}
    }
      ],
      //array of  ingredients
  ingredients:[
    {
    name:{type:String},
    amount:{type:String},
    allergen:{type:String}
    }
      ],
 method:{type:String},
 image:{type:String}

});



//model of database
const Food = new mongoose.model("Foof", foodSchema);



app.get('/',function(req,res){
  res.send('this is my Cook App');
});





app.listen(process.env.PORT||3000,function(){
  console.log('app is running on 3000');
});
