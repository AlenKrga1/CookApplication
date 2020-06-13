

# Cook Book
Cook Book Deployed app: [https://cook-bookapplication.herokuapp.com/](https://cook-bookapplication.herokuapp.com/)
Hi, this is cook book project.
As english is my second language I tried to explain everything in short and clear.

Main thing for this project is to create app which allows to do 4 things:
Create, Read, Update and Delete data known as CRUD

The brief for this project is as follows:

CREATE AN ONLINE COOKBOOK:

Create a web application that allows users to add and easily access cooking recipes.

Put some effort into designing a database schema based on recipes, and any other related properties and entities (e.g. views, upvotes, ingredients, recipe authors, allergens, author’s country of origin, cuisine etc…).

Create the backend code and frontend form to allow users to add new recipes to the site (at least a basic one, if you haven’t taken the frontend course).

Create the backend code to group and summarise the recipes on the site, based on their attributes such as cuisine, country of origin, allergens, ingredients, etc. and a frontend page to show this summary, and make the categories clickable to drill down into a filtered view based on that category. This frontend page can be as simple or as complex as you’d like; you can use a JavaScript library such as node.js, Express or a JS library .

Create the backend code to retrieve a list of recipes, filtered based on various criteria (e.g. usename, cuisine, etc…) . Create a frontend page to display these.

Create a detailed view for each recipes, that would just show all attributes for that recipe, and the full preparation instructions.

Allow for editing and deleting of the recipe records, either on separate pages.

## UX

This app was made for adding recipes, editing, deleting and viewing.

Users adding recipes:

We want to easily add recipes to the site's database. We want to access these recipes in future easily, perhaps through a username.  We want to be able to edit and delete recipes on the site. 

Users searching for recipes:

We want to be able to easily access recipes based on various search criteria (perhaps the title, cuisine or an username recipe). 



##  Existing Features


Dropdown: Used for the "Find a recipe" part of the navbar, to allow users to select which category they would like to use to search.

Buttons: Used for specific actions for user interaction.

Forms: Used as front-end methods to add and edit recipes on the site.

Delete Modal: When users hit the delete button on the recipe page, a modal pops up asking if users are sure they wish to delete the recipe. This allows for a "second chance" in case of accidental clicks of the delete button.

##  Features Left to Implement


For now  ingredients are not possible to edit so in future needed to be possible to do.
Also login system will be nice to have, but at this point we didnt learn how to.
Adding viewing count on recepties or add new page to see recepties by popularity. 


## Technologies Used

Used HTML

The project uses HTML to structure the site.

CSS

The project uses CSS to style the site.

Javascript

The project uses Javascript, jquery 

FontAwesome

The project uses FontAwesome icons on various pages of the app.

node.js

The project uses node.js logic elements of the project.


MongoDB

The project uses MongoDB Atlas as a non-relational database for the project's data.

Bootstrap

## Testing


Testing Scenarios: User Story 1 - Users adding recipes: Easily add recipes to the app's database:

Go to the add recipe page 

Insert random values into the form elements and click the "Add Recipe" button at the bottom of the page. Also added option to upload image.

Users will see that they have added a recipe with a New Cook data has been added message and link back to add new recepie page with message that recepie has been added.

I can see that this has been added to the database on MongoDB Atlas.

We can Access these recipes  through a username:


Go to the 'search recipes by username' page either through the navbar dropdown

Enter the username into the search field and click the search button.

The recipe will appear in the search results page.

This test can be repeated for any of the search categories.

Users will see the recipe in the search results,.

Edit recipes on the site:

Search for a recipe (use "test" as the title for this example).


At the bottom of the recipe page, click the "Edit Item" button.

Users will see a form like the "Add Recipe" form, but with the information from the recipe filled in.

Edit a field(s) of the recipe and click the "Update" button at the bottom of the page.

Users will see that they have edited the recipe and they will be link back to the site's home page. /in future reference needed to add sucesufull message/

The user will now see that the fields they changed have been changed in the recipe. 

Delete recipes on the site:

Search for a recipe (use "test" as the title for this example).

At the bottom of the recipe page, click the "Delete " button.

Users will see a  pop up, asking them if they are sure they wish to delete the recipe.

Click the "ok" button in the pop-up.

Users will be redirected to the home page.


Responsiveness of site: To help in creating a responsive site, I used bootstrap Grid System.  Still there are some bugs to edit to make app fully responsive but that 
will be taken care in future.

Navbar: For mobile views for the project, users will see that the full desktop navbar is reduced to just the logo and a burger button, which activates the side nav containing the navbar elements.




## Deployment

I created a repository on GitHub,
Created acc on MongoDb, created database there.
And i Pushed to Heroku

## Credits

Media All images for this project were obtained from Google Images.
Youtube tutorials which help me to understood things which was not clear to me.
Slack chanal with tons of students answers
and stack overflow for tons of information aviable online
