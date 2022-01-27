# Better way 😎

```js

const button = document.querySelector(".btn");

button.addEventListener("click", function(event) {
  console.log("This will be printed");
})

button.addEventListener("click", function(event) {
  console.log("This will be printed as well");
})
```