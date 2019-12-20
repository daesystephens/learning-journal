# Call Stack 

Acording to MDN a **Call Stack** is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions. </br>
Its function is currently being run and what functions are called from within that function.</br></br>
Call Stack is mainly used for function invocation. Is a single function execution done one at a time.</br>
Call Stack uses the principle **LIFO** which is **LAST IN, FIRST OUT**

```javascript
function firstFunction(){ console.log("Hello from firstFunction");}
```

```javascript
function secondFunction(){ firstFunction(); console.log("The end from secondFunction");}
```

```javascript
secondFunction();
```