---
layout: two-cols
---

<template v-slot:default>

# Tipos de pruebas

<div v-click="1">

## Por su ejecución

<v-clicks at="2">

1. Prueba manual
2. Prueba automatizada

</v-clicks>

<div v-click="11">

![Testing Hierarchy](https://www.benday.com/wp-content/uploads/2021/01/image-1.png)
</div>
</div>

</template>

<template v-slot:right>


<div v-click="4">

# Por su alcance

<v-clicks at="5">

1. **Pruebas unitarias:** Son pruebas que se realizan por componente o función, lo más atómico posible
2. **Pruebas funcionales:** Son pruebas que se realizan por componente o función, lo más atómico posible
3. **Prubeas de integración:** Son pruebas que se realizan a los componentes integrados como un todo
4. **Pruebas de humo:** Son pruebas rápidas críticas
1. **Pruebas de regresión:** Son pruebas que validan si la aplicación sigue funcionando después de haber sido actualizada
1. **Pruebas de estrés:** Son pruebas que evalúan la carga que soporta una aplicación, servicio o sistema

</v-clicks>

</div>

</template>


<!--
Unitarias: JUnit, Jest, Mocha
Regresión: Normalmente se usan las pruebas que se definieron al principio
Estrés: Se usan herramientas como JMeter o Postman
Integración: Cypress
-->