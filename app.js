//jshint esversion:6
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
mongoose.connect("mongodb://localhost:27017/cookBookDB", {useNewUrlParser: true, useUnifiedTopology: true });
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
  ingredients: [
    {
      name: { type: String },
      amount: { type: String },
      allergen: { type: String },
    },
  ],
  method: { type: String },
  image: { type: String, default: "defaultPic.png" }
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
  res.send('this is my Cook App');
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
  req.checkBody("upload", "image is Required").notEmpty();

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


app.listen(process.env.PORT||3000,function(){
  console.log('app is running on 3000');
});
