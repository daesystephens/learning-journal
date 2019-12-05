# GRIDS

Grids let us arrange elements in a row or a column, as well as multiple row and columns.

**The ```repeat()``` function takes two arguments, the first will define the number of column tracks and the second, what width the tracks should be.**

```css
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
```

Here is a [link](http://grid.malven.co/) of a website with good visuals to better understand grids. 

# Regex
Regex. Short for regular expression, a regex is a string of text that allows you to create patterns that help match, locate, and manage text. 

**Most Common Regex**

| Description           | Expression                |
| --------------------- |:-------------------------:|
| Whole Numbers         | ```/^\d+$/```             |
| Decimal Numbers       | ```/^\d*\.\d+$/```        |
| Alphanumeric without space |```/^[a-zA-Z0-9]*$/```|
| Alphanumeric with space | ```/^[a-zA-Z0-9 ]*$/``` |
| Common email Ids | ```/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/``` |
| Username Alphanumeric string | ```/^[a-z0-9_-]{3,16}$/``` |
| HTML Tags Elements with Attributes | ```/<\/?[\w\s]*>|<.+[\W]>/``` |
| Inline JS handler | ```/\bon\w+=\S+(?=.*>)/``` |
