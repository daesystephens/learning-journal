# Flexbox

## Handlebars
Handlebars is a templating language.

* **Adding to your Project**
```html
<!-- Include Handlebars from a CDN -->
<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
```

**Template**

```html
<p>{{firstname}} {{lastname}}</p>
```

**Input Data**

```javascript
  {
  firstname: "Jhon",
  lastname: "Smith"
}
```

**Output**

```html
<p>Jhon Smith</p>
```