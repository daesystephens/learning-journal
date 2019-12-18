# EJS PARTIAL

Ejs embedded javascript, is a templating language. Partials allow you to define something once, and then apply it to any page in your application. Partials help us avoid repetition of the same code on several web pages. It combines data and a template to produce HTML

Before using EJS we should install the following in terminal:

```
npm install express ejs -S
```

Example of EJS LAYOUT
**server.js**

```javascript
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set('view engine', 'ejs');
app.get("/", function(req, res) {
    res.render("home");
});
app.get("/about", function(req, res) {
    res.render("about");
});
app.listen(3000, function() {
    console.log("server is listening!!!");
});
```

**Insert Partial on a Page**

```javascript
<% include ../partials/head %>
```