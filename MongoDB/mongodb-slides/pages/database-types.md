---
layout: two-cols
---

<template v-slot:default>

# Relacionales (SQL)

<v-clicks>

- Los datos están organizados en entradas bidimensionales (tablas)
- En las tablas existen columnas y registros
- Una tabla no puede estar dentro de otra tabla
- Una columna puede tener sólo un tipo de dato fijo

</v-clicks>

<br>
<br>

<v-click>

| CODIGO    | NOMBRE_COMPLETO | CREDITOS |
| --------- | --------------- | -------- |
| 20171124B | Misael Abanto   | 60       |
| 20181434A | Carlos Lopez    | 45       |
| 20162434F | Italo Contreras | 30       |

</v-click>

</template>
<template v-slot:right>

# No relacionales (No-SQL)

<v-clicks>

- Los datos no están organizados en tablas
- Las colecciones son un conjunto de objetos, nodos o documentos
- Cada objeto, nodo o documento consta del nombre de una propiedad y su valor
- Un objeto, nodo o documento puede tener a su vez otro

</v-clicks>
<v-click>
<div class="h-1/2" style="overflow-y: scroll !important">

```json
{
  "codigo": "20171124B",
  "nombreCompleto": "Misael Abanto",
  "creditos": "60"
}
```
```json
{
  "codigo": "20181434A",
  "nombreCompleto": "Carlos Lopez",
  "creditos": "45"
}
```
```json
{
  "codigo": "20162434F",
  "nombreCompleto": "Italo Contreras",
  "creditos": "30"
}
```
```json
{
  "<field>": "<value>",
  "<property>": "<value>",
  "<key>": "<subdocument>",
}
```

</div>

</v-click>


</template>

