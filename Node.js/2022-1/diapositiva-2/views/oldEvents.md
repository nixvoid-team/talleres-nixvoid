# Not recommended way 😐

```js

const button = document.querySelector(".btn")

button.onclick = function() {
  console.log("This will not print");
}

button.onclick = function () {
  console.log("This will be printed");
}

```