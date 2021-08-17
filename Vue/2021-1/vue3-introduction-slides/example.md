---
theme: ./
clicks: 1
altCover: true
title: Vuetiful Theme
---

# Taller de Vue Router y Vuex



---
layout: outro
---

¿Qué conocimientos tenemos?

---
layout: section
---

# Primeros Pasos

---
layout: section
---

# Vue 3 CheatSheet

---

### SINTAXIS DE PLANTILLA 
Opciones de interpolación de texto

```html
 <span> {{ msg }} </span> 
 <span v-text="msg"></span>

```
Puedes usar expresiones JS

```html
<span> {{ mg.reverse​()​ ​}} </span>

```


---

### DIRECTIVA



- **v-if**,  Pone el en DOM si es verdadero
- **v-else-if**,  Como un condicional habitual
- **v-else**, Como un condicional habitual
- **v-show**, Conmuta el valor CSS de visualización
- **v-text**, Establece el texto interno
- **v-html**, Establece el HTML interno
- **v-for** Bucle a través de una matriz / obj
- **v-on o @**, Escucha eventos DOM
- **v-bind o :**, atributo de actualizaciones reactivas
- **v-model**, Enlace de datos bidireccional
- **v-once**, Establece val una vez; Nunca actualice


---

### RENDERIZANDO CONDICIONAL

Agregar / quitar elemento de DOM
 
```html
<div v-if="date == today"> ... </div>
<div v-else-if="! done"> ... </div>
<div v-else> ... </div>
```

Alterna la visualización de CSS en el lugar de editar DOM

```html
<div v-show="date == today">...</div> 
```


---

### RENDERIZADO DE LISTA
Iteración básica sobre la lista

```html
<li v-for="item in items" :key="item"> 
      {{ item }} 
</li>
```

Iteración e índice de seguimiento 
```html
<li v-for="(item,index) in​ items"> 
  {{ index }} : {{ item }} 
</li>
```

Iteración sobre los valores del objeto
```html
<li v-for="(value, key) in object">
  {{ key }} : {{ value }}
</li>
```





---

### ENLACE DE DIRECTIVAS
Enlace simple

```html
<div v-bind:id = "objectI D"> ... </div>
<!-- SHORTHAND --> 
<div :id = "objectID"> ... </div>
```

Enlace bidireccional 
```html
<input v-model="email" /> 
```


Usar objetos para enlanzar a clases / estilos 
```html
<input :class = "{error: hasError}" />
<input :style = "{margin: space + "px"}" />
```

Modificadores de entrada
```html
.lazy en evento de cambio
.trim elimina los espacios en blanco adicionales
```


---

### MANEJO DE EVENTOS
Captura un evento y llama a un método
```html
<div v-on:click="count">Increase</div> 
<!-- SHORTHAND --> 
<div @click="count">Increase</div>
```


---

### COMUNICACIÓN ENTRE COMPONENTES PADRE E HIJO
Utilice v-bind para pasar datos de padres a hijos y emita un evento personalizado para devolver los datos.
 
En el padre, vincularlistener datos y configurar el listener que actualizará
```html
<my-component :msg="s" @update="s=$event"/> 
```
En niño, enviar de vuelta usando emit (evento, datos)
```js
  this.$emit("update", "hello world")
```


---
layout: section
---

# Componentes

---
title: ¿Qué es un Single File Component?
titleRow: true
---

### Vue Single File Components (también conocido como archivos * .vue, abreviado como SFC) es un formato de archivo especial que nos permite encapsular la plantilla, la lógica y el estilo de un componente Vue en un solo archivo.


---

# Ejemplo de un SFC

```html
<script>
export default {
  data() {
    return {
      greeting: "Hello World!"
    }
  }
}
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>

```

---

# Ejemplo de un SFC

Como podemos ver, Vue SFC es una extensión natural del clásico trío de HTML, CSS y JavaScript. Cada archivo * .vue consta de tres tipos de bloques de lenguaje de nivel superior: 
``<template> ``,`` <script> ``y ``<style> `` :

-  La sección `` <script>`` es un módulo estándar de JavaScript. Debería exportar una definición de componente de Vue como su exportación predeterminada.
-  La sección `` <template> `` define la plantilla del componente.
-  La sección `` <style> `` define CSS asociado con el componente.


---

# Organización de componentes
Es común que una aplicación se organice en un árbol de componentes anidados:

![alt text](https://v3.vuejs.org/images/components.png?__WB_REVISION__=b5c08269dfc26ae6d7db3801e9efd296 "Logo Title Text 1")


Por ejemplo, puede tener componentes para un encabezado, barra lateral y área de contenido, cada uno de los cuales normalmente contiene otros componentes para enlaces de navegación, publicaciones de blog, etc.


---




---
layout: section
---

# Gestión del estado entre
# componentes


---

# Gestión del estado
- Cuando hablamos de estado, nos referimos a los datos de los que dependen y procesan sus componentes. Cosas como publicaciones de blog, elementos de tareas pendientes, etc.
- Administrar el estado en una aplicación llena de componentes puede resultar difícil.


<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578371882428_0.png?alt=media&token=bad49a29-5fff-4dcd-bf42-f5c8beec69b7" class="mx-60 h-80 rounded shadow" />



---

# Gestión del estado
Si un componente cambia de estado y un pariente lejano también está usando ese mismo estado, necesitamos comunicar ese cambio.  Existe la forma predeterminada de comunicar eventos y transmitir accesorios para compartir datos, pero eso puede volverse demasiado complicado.


<img src="https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578371882429_1.png?alt=media&token=2c411c9f-d5cf-4404-8009-00b73e24a622" class="mx-40 h-80 rounded shadow" />

---

# ¿Qué necesitamos?
- Necesitamos un lugar donde consolidar todo nuestros estados en un solo lugar.
- Una ubicación que contiene el estado actual de toda nuestra aplicación.
- Una fuente 100% confiable que pueda ser depurable.


---

# ¿Tenemos una solución? ... si, Flux
### ¿Qué es flux?
Flux es un patrón para administrar el flujo de datos en su aplicación. El concepto más importante es que los datos fluyen en una dirección. A medida que avanzamos en esta guía, hablaremos sobre las diferentes partes de una aplicación Flux y mostraremos cómo forman ciclos unidireccionales por los que pueden fluir los datos.

### Elementos de Flux:
- Dispatcher
- Store
- Action
- View

<!--
Despachador

El despachador recibe acciones y las envía a las tiendas que se han registrado con el despachador. Cada tienda recibirá cada acción. Debe haber solo un despachador singleton en cada aplicación.

Ejemplo:

    El usuario escribe el título de una tarea y presiona Enter.
    La vista captura este evento y envía una acción de "agregar todo" que contiene el título del todo.
    Cada tienda recibirá esta acción.

Tienda

Una tienda es lo que contiene los datos de una aplicación. Las tiendas se registrarán con el despachador de la aplicación para que puedan recibir acciones. Los datos de una tienda solo deben modificarse respondiendo a una acción. No debería haber ningún setter público en una tienda, solo getters. Las tiendas deciden a qué acciones quieren responder. Cada vez que los datos de una tienda cambian, debe emitir un evento de "cambio". Debería haber muchas tiendas en cada aplicación.

Ejemplos:

    La tienda recibe una acción de "agregar todo".
    Decide que es relevante y agrega la tarea a la lista de cosas que deben hacerse hoy.
    La tienda actualiza sus datos y luego emite un evento de "cambio".

Comportamiento

Las acciones definen la API interna de su aplicación. Capturan las formas en que cualquier cosa puede interactuar con su aplicación. Son objetos simples que tienen un campo "tipo" y algunos datos.

Las acciones deben ser semánticas y descriptivas de la acción que tiene lugar. No deben describir los detalles de implementación de esa acción. Utilice "delete-user" en lugar de dividirlo en "delete-user-id", "clear-user-data", "refresh-credentials" (o como funciona el proceso). Recuerde que todas las tiendas recibirán la acción y podrán saber que necesitan borrar los datos o actualizar las credenciales manejando la misma acción de "eliminar usuario".

Ejemplos:

    Cuando un usuario hace clic en "eliminar" en una tarea completada, se envía una única acción "eliminar-tarea":

  {
    tipo: 'eliminar-todo',
    todoID: '1234',
  }

Puntos de vista

Los datos de las tiendas se muestran en vistas. Las vistas pueden usar cualquier marco que desee (en la mayoría de los ejemplos aquí usaremos React). Cuando una vista usa datos de una tienda, también debe suscribirse para cambiar los eventos de esa tienda. Luego, cuando la tienda emite un cambio, la vista puede obtener los nuevos datos y volver a renderizar. Si un componente alguna vez usa una tienda y no se suscribe a ella, es probable que haya un error sutil esperando a ser encontrado. Las acciones se envían normalmente desde las vistas cuando el usuario interactúa con partes de la interfaz de la aplicación.

Ejemplo:

    La vista principal se suscribe a TodoStore.
    Accede a una lista de Todos y los muestra en un formato legible para que el usuario interactúe.
    Cuando un usuario escribe el título de un nuevo Todo y presiona ingresar, la vista le dice al Despachador que envíe una acción.
    Todas las tiendas reciben la acción enviada.
    TodoStore maneja la acción y agrega otro Todo a su estructura de datos interna, luego emite un evento de "cambio".
    La vista principal está escuchando el evento "cambio". Obtiene el evento, obtiene nuevos datos de TodoStore y luego vuelve a mostrar la lista de Todos en la interfaz de usuario.
-->

---

# Flux
### ¿Cúal el flujo  de flux?
Podemos dividir las partes de Flux anteriores en un diagrama que describa cómo fluyen los datos a través del sistema.
- Las vistas envían Actions al Dispatcher.
- Dispatcher envía Actions a cada Store.
- Store envía datos a las vistas, (Desde otro punto de vista: View obtienen datos de Store).

<img src="https://raw.githubusercontent.com/facebook/flux/master/examples/flux-concepts/flux-simple-f8-diagram-with-client-action-1300w.png" class="mx-10 h-60 rounded shadow" />

<!--
.element height="50%" width="50%" -->

<!--
.element height="50%" width="50%" -->

<!--
.element height="50%" width="50%" -->

<!--
.element height="50%" width="50%"
-->

---
layout: section
---

# Introducción a Vuex


---
layout: quote
author: Linus Borg (2021)
---

# Big quotes make your talk look fancy

---
layout: big-points
title: Need to make a few big points?
titleRow: true
---

- Increased font size... <Badge type="warn">Test</Badge>
- ...and centered content
- help stressing a few points

---

# Code

Use code snippets and get the highlighting directly!

```html
<template>
  <h1>Hello World"</h1>
  <div class="message">{{ message }}</div>
</template>
<script>
  export default {
    data:() => ({
      message: "Great to be here!",
    })
  }
</script>
<style scoped>
  .message {
    color: red;
  }
</style>
```

---
layout: video
video: https://player.vimeo.com/video/455611549
---

# You can include Video!

---
layout: sfc
example: Test
---

# Firing up a Vue SFC playground

---
title: Default Slide can show flexible grids
titleRow: true
cols: '2-1'
---

```html
<template>
  <h1>Hello World"</h1>
  <div class="message">{{ message }}</div>
</template>
<script>
  export default {
    data:() => ({
      message: 'Great to be here!',
    })
  }
</script>
<style scoped>
  .message {
    color: red;
  }
</style>
```

::right::

## Features

* Flexible column width via windicss
* Here, more weight on the left
* Leaves room for short notes

---
layout: outro
twitter: '@Linus_Borg'
website: 'https://www.linusb.org'
repository: 'github.com/linusborg/slidev-theme-vuetiful'
---

Thank you for listening!

Questions?
