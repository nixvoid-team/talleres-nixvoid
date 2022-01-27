# Fetch API

<br>

- Disponible para navegadores 
- Permite peticiones y respuestas http
- La funcion fetch es una función asíncrona

<br>

```js

const url = 'https://pokeapi.co/api/v2/berry/1/'


fetch(url, {
  method: 'GET', 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

```
