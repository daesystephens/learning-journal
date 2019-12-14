# EJS

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It helps you load data from your application into your html file easily.

For example, if we have and html code ```<h1><%= dayOfTheWeek %></h1>```, dayOfTheWeek is a variable from your application, and what is gonna show on the screen is the variable's value.

**Install**
in terminal 
```$ npm install ejs```

**Use it**

IN server.js

```html
<script src="ejs.js"></script>
<script>
  let people = ['Yoshi', 'Chance', 'Nick', 'Joshua'],
      html = ejs.render('<%= people.join(", "); %>', {people: people});
</script>```

In index.html

```html
<ul>
  <% people.forEach(function(name){ %>
    <li><%= name %></li>
  <% }) %>
</ul>```

Output will be same like this

```html
<h2>My Favorite People</h2>
    <ul>
      <li>Yoshi</li>
      <li>Chance</li>
      <li>Nick</li>
      <li>Joshua</li>
    </ul>```

