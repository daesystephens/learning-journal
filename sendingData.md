# Sending Form Data

A client (a Web browser) sends a request to a server (most of the time a web server like Apache, Nginx, IIS, Tomcat, etc.), using the HTTP protocol. The server answers the request using the same protocol.</br>

On the client side, an HTML form is a user-friendly way to configure an HTTP request to send data to a server. This enables the user to provide information to be delivered in the HTTP request.

**Action** Attribute

The action attribute defines where the data gets sent.

```html
<form action="https://example.com">
```

```html
<form action="/home">
```

**GET Method**
Is used to request data from a specific resource. The values are stored in the URL.

```html
<form action="http://www.foo.com" method="GET">
```

**POST Method**
Is used to send data to a server to create/update a resource. The values are stored in the request body of the HTTP request.

```html
<form action="http://www.foo.com" method="POST">
```