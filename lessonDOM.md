# DOM
using the DOM, JavaScript can perform multiple tasks. It can create new elements and attributes, change the existing elements and attributes and even remove existing elements and attributes. JavaScript can also react to existing events and create new events in the page.

### getElementByID, innerHTML 

1. getElementById: To access elements and attributes whose id is set.
2. innerHTML: To access to content of an element.

```html
<html>
<head>
	<title>DOM!!!</title>
</head>
<body>
  <h1 id="one">Welcome</h1>
  <p>This is the welcome message.</p>
  <h2>Technology</h2>
  <p>This is the technology section.</p>
  <script type="text/javascript">
		var text = document.getElementById("one").innerHTML;
		alert("The first heading is " + text);
  </script>
</body>
</html>
```

### getElementsByTagName

getElementsByTagName: To access element and attributes using tag name. This method will return an array of all the items with the same tag name.

```html
<html>
<head>
	<title>DOM!!!</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is the welcome message.</p>
  <h2>Technology</h2>
  <p id="second">This is the technology section.</p>
  <script type="text/javascript">
	var paragraphs = document.getElementsByTagName("p");
    alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
    document.getElementById("second").innerHTML = "The orginal message is changed.";
  </script>
</body>
</html>
```
