Cook Book
Deployed app: https://cook-bookapplication.herokuapp.com/

The brief for this project is as follows:

CREATE AN ONLINE COOKBOOK:

Create a web application that allows users to add and easily access cooking recipes.

Put some effort into designing a database schema based on recipes, and any other related properties and entities (e.g. views, upvotes, ingredients, recipe authors, allergens, author’s country of origin, cuisine etc…). 

Create the backend code and frontend form to allow users to add new recipes to the site (at least a basic one, if you haven’t taken the frontend course).

Create the backend code to group and summarise the recipes on the site, based on their attributes such as cuisine, country of origin, allergens, ingredients, etc. and a frontend page to show this summary, and make the categories clickable to drill down into a filtered view based on that category. This frontend page can be as simple or as complex as you’d like; you can use a JavaScript library such as node.js, Express or a JS library .

Create the backend code to retrieve a list of recipes, filtered based on various criteria (e.g. usename, cuisine, etc…) . Create a frontend page to display these.

Create a detailed view for each recipes, that would just show all attributes for that recipe, and the full preparation instructions.

Allow for editing and deleting of the recipe records, either on separate pages.


UX
This app has two primary parties involved – users who want to add recipes to the site for storage purposes/future reference/to share with others, and users who want to search for recipes. The user stories for these parties are as follows:

Users adding recipes:

We want to easily add recipes to the site's database.
We want to access these recipes in future easily, perhaps through a username.
We want to be albe to see if the recipe has been received favourably, either through likes or view numbers.
We want to be able to edit and delete recipes on the site.
Users searching for recipes:

We want to be able to easily access recipes based on various search criteria (perhaps the title, cuisine or an username recipe).
We want to be able to get a summary of search results to make it easier to decide which search result recipe best fits what we are looking for.

We want the recipe to be clear and concisely presented, in an easily understandable format.


Features
Existing Features

Parallax: Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Here, it is used for the hero image on the home page.


Dropdown: Used for the "Find a recipe" part of the navbar, to allow users to select which category they would like to use to search.

Buttons: Used for specific actions for user interaction.

Forms: Used as front-end methods to add and edit recipes on the site.



Delete Modal: When users hit the delete button on the recipe page, a modal pops up asking if users are sure they wish to delete the recipe. This allows for a "second chance" in case of accidental clicks of the delete button.

Features Left to Implement

Adding the ability for users to create their own profile. As a result of this, users would have their own page with their recipes, and deleting recipes would be locked to the owner of the recipe only.

adding login system

Technologies Used
HTML

The project uses HTML to structure the site.

CSS

The project uses CSS to style the site.

Javascript

The project uses Javascript, in particular JQuery, for interactive elements on various pages.


FontAwesome

The project uses FontAwesome icons on various pages of the app.

node.js

The project uses node.js logic elements of the project.

Flask

The project uses the express framework.

MongoDB

The project uses MongoDB Atlas as a non-relational database for the project's data.


Testing
Scenarios:
User Story 1 - Users adding recipes:
Easily add recipes to the app's database:

Go to the add recipe page (either through the navbar link or by the add recipe  on home page).

Insert random values into the form elements and click the "Add Recipe" button at the bottom of the page.

Users will see that they have added a recipe with a New Cook data has been added message and link back to the site's home page.



Can visually confirm that this works. As the site developer, I can see that this has been added to the database on MongoDB Atlas.

Access these recipes in future easily, perhaps through a username:

Add a recipe. Recall the username submitted with this recipe.

Go to the 'search recipes by username' page either through the navbar dropdown 

Enter the username into the search field and click the search button.

The recipe will appear in the search results page.

This test can be repeated for any of the search categories.

See if the recipe has been received favourably, either through likes or view numbers:

Users will see the recipe in the search results, and the number of views can be clearly seen on the recipe card.

Edit recipes on the site:

Search for a recipe (use "test" as the title for this example).

Click on the resulting recipe's card and click on the link from the card reveal.

At the bottom of the recipe page, click the "Edit Recipe" button.

Users will see a form like the "Add Recipe" form, but with the information from the recipe filled in.

Edit a field(s) of the recipe and click the "Edit Recipe" button at the bottom of the page.

Users will see that they have edited the recipe with  message and link back to the site's home page.

To ensure this recipe was edited, they can repeat the search procedure above and go to the recipe's page.

The user will now see that the fields they changed have been changed in the recipe. As the site developer, I can see that this has been edited in the database on MongoDB Atlas.

Delete recipes on the site:

Search for a recipe (use "test" as the title for this example).

Click on the resulting recipe's card and click on the link from the card reveal.

At the bottom of the recipe page, click the "Delete " button.

Users will see a modal pop up, asking them if they are sure they wish to delete the recipe.

Click the "ok" button in the pop-up.

Users will be redirected to the home page.

To see if the recipe was in fact deleted, users can repeat the search process, and will find that the recipe does not appear in the search results as it has been deleted. As the site developer, I can see that this has been deleted from the database on MongoDB Atlas.

See "User Story 1" point on "Access these recipes in future easily, perhaps through a username".
Get a summary of search results to make it easier to decide which search result recipe best fits what we are looking for:

Search for a recipe (use "test" as the name for this example)

Users will see the recipes in the database which match their search criteria at the top of the search results page.


Users will see that the search results are returned  order of the number of views they have (i.e. the recipes with the most views will appear first).

The recipe to be clear and concisely presented, in an easily understandable format

Search for a recipe (use "test" as the name of example).

Click on a search result and click the link from the card reveal.



Responsiveness of site:
To aid in creating a responsive site, I used bootsrtap Grid System. Through the creating process of this app, I would check the various break points to see if the column sizes worked with the design on various device screen sizes, using Chrome Dev Tools.

Navbar: For mobile views for the project, users will see that the full desktop navbar is reduced to just the logo and a burger button, which activates the side nav containing the navbar elements.

Sections: The Grid System aided me greatly in arranging the sections for each page. As I was creating each section, and the elements in each (e.g. cards, images, text, etc.), I experimented with various column sizes for each breakpoint to get an appealing layout appropriate to the screen size it is being viewed on.


The Recipe View: The layout of the first card on the page (containing the title, username, views, image and description) changes in the mobile view, where the image goes from the side to being quite prominent within the card.


Deployment
I created a repository on GitHub.

I then created the app on Heroku,  (with the project's required applications) and a Procfile (specifying the app is a node:web app).

I then pushed to Heroku. Having done this, I then specified the IP and PORT.

I pushed to heroku whenever I pushed to Github. This was incredibly useful in testing the site, as outlined above, especially in testing it on various screen sizes.

Credits
Content
Some of the basic functionality (although edited in various places), for example the add and delete functions, was obtained from the Data Centric cookBook Project.

The icons from FontAwesome.

Media
All images for this project were obtained from Google Images.
