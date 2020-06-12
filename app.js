//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var flash = require("express-flash");
const expressValidator = require("express-validator");
const session = require("express-session");
const app = express();

const formidable = require("formidable");
const path = require("path");
const fs = require("fs");


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



//sesion to access flash
app.use(session({
  secret:'CookBook.',
  resave:false,
  saveUninitialized:false
}));
app.use(flash());

//coonet to mongodb
//mongoose.connect("mongodb://localhost:27017/cookBookDB", {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://" + process.env.MONGO_USERNAME + ":" +process.env.MONGO_PASSWORD+"@coockbook-yhjfy.mongodb.net/cookBookDB", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set("useCreateIndex", true);

//database schema (Table)
const foodSchema = new mongoose.Schema({
  recipeName: { type: String },
  recipeDescription: { type: String },
  recipeCuisine: { type: String },

  //data of user
  username: { type: String },
  country: { type: String },

  //array of  ingredients
  ingredients: 
    {
      name: { type: String },
      amount: { type: String },
      allergen: { type: String },

      name1: { type: String },
      amount1: { type: String },
      allergen1: { type: String },

      name2: { type: String },
      amount2: { type: String },
      allergen2: { type: String },

      name3: { type: String },
      amount3: { type: String },
      allergen3: { type: String }
    }
  ,
  method: { type: String },
  image: { type: String, default: "defaultPic.png" },
});



//model of database
const Food = new mongoose.model("Food", foodSchema);

//validator
app.use(expressValidator({
  errorFormatter: function(param,msg,value){
  var namespace=param.split('.'),
  root=namespace.shift(),
  formParam=root;

while (namespace.length) {
  formParam +='['+namespace.shift()+']';
}
return{
  param:formParam,
  msg:msg,
  value:value
};
  }
}));


//setup flash enviroment
app.use(require("connect-flash")());
app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

//access user in public
app.get("*", (req, res, next) => {
  res.locals.user = req.user || null;
  next();
});


app.get('/',function(req,res){
 
  res.render("home", { title:"Home - Cook Book"});
 
});



app.get('/addNewData',function(req,res){
    var success = req.flash("success");
    var errors = req.flash("error");
  res.render('addData',{title:"add New Cook",success:success, noErrors: success.length > 0,messages:errors,hasErrors:errors.length>0});
});

app.post("/addNewData", newDtataValidate, function (req, res) {
  var newCook = new Food();

  newCook.recipeName = req.body.name;
  newCook.recipeDescription = req.body.description;
  newCook.recipeCuisine = req.body.cuisine;

  newCook.ingredients.name =req.body.iName;
  newCook.ingredients.amount=req.body.iAmount;
  newCook.ingredients.allergen = req.body.iAllergen;

  newCook.ingredients.name1 = req.body.iiName;
  newCook.ingredients.amount1 = req.body.iiAmount;
  newCook.ingredients.allergen1 = req.body.iiAllergen;

  newCook.ingredients.name2 = req.body.iiiName;
  newCook.ingredients.amount2 = req.body.iiiAmount;
  newCook.ingredients.allergen2 = req.body.iiiAllergen;

  newCook.ingredients.name3 = req.body.ivName;
  newCook.ingredients.amount3 = req.body.ivAmount;
  newCook.ingredients.allergen3 = req.body.ivAllergen;

  newCook.username = req.body.username;
  newCook.country = req.body.country;
  newCook.method = req.body.method;
  newCook.image = req.body.upload;

  newCook.save(function (err) {
    if (err) {
      console.log(err);
    }
    req.flash("success", "New Cook data has been added.");
    res.redirect("/addNewData");
  });
});

//validation for add new data
function newDtataValidate(req,res,next){
  req.checkBody("name", "recipe name is Required").notEmpty();
  req.checkBody("description", "recipe description is Required").notEmpty();
  req.checkBody("cuisine", "recipe cuisine is Required").notEmpty();
  req.checkBody("username", "username is Required").notEmpty();
  req.checkBody("country", "Country is Required").notEmpty();
  req.checkBody("method", "method is Required").notEmpty();
 

  const errors=req.validationErrors();
  if (errors) {
    var messages=[];
    errors.forEach((error)=>{
      messages.push(error.msg);
    });
    req.flash('error',messages);
    res.redirect("/addNewData");
  }else {
    return next();
  }
}


//for uploading files

app.post("/upload", (req, res) => {
  var form = new formidable.IncomingForm();

  form.uploadDir = path.join(__dirname, "/public/uploads");

  form.on("file", (field, file) => {
    fs.rename(file.path, path.join(form.uploadDir, file.name), (err) => {
      if (err) {
        throw err;
      }

      console.log("File has been renamed");
    });
  });

  form.on("error", (err) => {
    console.log("An error occured", err);
  });

  form.on("end", () => {
    console.log("File upload was successful");
  });

  form.parse(req);
});





app.get('/Search-By-UserName',function(req,res){
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    Food.find({username:regex},function(err,foundData){
      res.render('byUserName',{title:'search by UserName',data:foundData});
    });
  }else{
     Food.find({},function(err,foundData){
      res.render('byUserName',{title:'search by UserName',data:foundData});
    });
  }
});




app.get('/Search-By-recipeName',function(req,res){
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    Food.find({recipeName:regex},function(err,foundData){
      res.render('recipeName',{title:'search by recipeName',data:foundData});
    });
  }else{
     Food.find({},function(err,foundData){
      res.render('recipeName',{title:'search by recipeName',data:foundData});
    });
  }
});


app.get('/Search-By-recipeCuisine',function(req,res){
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    Food.find({recipeCuisine:regex},function(err,foundData){
      res.render('recipeCuisine',{title:'search by recipeCuisine',data:foundData});
    });
  }else{
     Food.find({},function(err,foundData){
      res.render('recipeCuisine',{title:'search by recipeCuisine',data:foundData});
    });
  }
});


app.get('/viewRecepties', function (req, res) {
 
    Food.find({}, function (err, foundData) {
      res.render('viewRecepties', { title: 'View Recepties', data: foundData });
    });
});



////Delete Item///
app.post("/DeleteItem", function (req, res) {
  const itemId = req.body.btnDelete;
  Food.findByIdAndDelete(itemId, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully Deleted");
      res.redirect("/");
    }
  });
});



///Update Date////

app.get("/update/:id", function (req, res) {
     var success = req.flash("success");
     var errors = req.flash("error");
  Food.findById(req.params.id, function (err, data) {
    
    if (err) {
      console.log(err);
    }
    res.render("updateItem", { title: "Edit Cook", info: data ,success:success, noErrors: success.length > 0,messages:errors,hasErrors:errors.length>0});
  });
});


app.post('/update/:id',function(req,res){
  var editData = {
    recipeName: req.body.name,
    recipeDescription: req.body.description,
    recipeCuisine: req.body.cuisine,
    username: req.body.username,
    country: req.body.country,
    method: req.body.method,
    name: req.body.iName,
    amount: req.body.iAmount,
    allergen: req.body.iAllergen,
    name1: req.body.iiName,
    amount1: req.body.iiAmount,
    allergen1: req.body.iiAllergen,
    name2: req.body.iiiName,
    amount2: req.body.iiiAmount,
    allergen2: req.body.iiiAllergen,
    name3: req.body.ivName,
    amount3: req.body.ivAmount,
    allergen3: req.body.ivAllergen
  };
  Food.findByIdAndUpdate(req.params.id,editData,function(err){
    if (err) {
      res.redirect("/update/"+req.params.id);
    }
    res.redirect("/");
  });
  });


///view Date////

app.get("/viewcook/:id", function (req, res) {
  Food.findById(req.params.id, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.render("viewItem", { title: "View Cook", info: data});
  });
});

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

app.listen(process.env.PORT||3000,function(){
  console.log('app is running on 3000');
});
