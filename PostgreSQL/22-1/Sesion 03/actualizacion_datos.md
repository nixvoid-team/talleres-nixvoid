## Parte teórica

La sintaxis general para actualización de registro(s) o tupla(s) en una tabla es la siguiente:

```sql
UPDATE nombre_tabla
SET columna1 = valor1,
    columna2 = valor2,
    ...
WHERE condicion
RETURNING expresión(valor1, valor2, ...) | * AS output_name;
```

## Parte práctica

1. Actualizar algunos registros que esten en la tabla `cuentas`
2. Actualizar un registro y retornar las columnas actualizadas
3. Actualizar dos registro y retornar expresiones basadas en sus columnas

```sql


--Resolución 1 y 2
UPDATE cuentas
SET username = 'Usuario5 Cambiado2'
WHERE user_id = 6
RETURNING *

--Resolución 3
UPDATE cuentas
SET username = 'Usuario5 Cambiado2'
WHERE user_id = 6
RETURNING user_id, username

```
