La consulta de datos es una operación que se hará con más frecuencia que las demás operaciones
básicas, también dependiendo de lo que se quiera extraer o consultar de los datos la consulta
puede ser muy compleja y se puede hacer uso de diferentes funcionalidades de SQL, con funcionalidades
extras dadas dependiendo del motor de base de datos.

1. Seleccionar columnas

   ```sql
   SELECT columna1 AS "otro_nombre", columna2 FROM nombre_tabla

   SELECT user_id AS "Id del usuario", username FROM cuentas
   ```

   > Observaciones
   >
   > - Si se selecciona `*` se seleccionan todas las columnas de los datos
   > - PostgreSQL (El motor de base de datos) primero lee el FROM luego el SELECT
   > - El `AS` es opcional solo si quieres darle un nombre diferente a la columna consultada

2. Filtrar registros

   ```sql
   --1er Caso: WHERE
   SELECT columna1, columna2 FROM nombre_tabla
   WHERE condicion

   SELECT user_id, username FROM cuentas WHERE user_id>5;

   --2do Caso: LIMIT Y OFFSET
   SELECT columna1, columna2
   FROM nombre_tabla
   LIMIT n_filas_obtener OFFSET n_filas_omitir;

   SELECT * FROM cuentas LIMIT 3 OFFSET 1;

   --3er Caso: LIKE
   SELECT columna1, columna2
   FROM nombre_tabla
   WHERE columna LIKE '%Ejemplo%'

   SELECT * FROM cuentas WHERE username LIKE 'D%';
   SELECT * FROM cuentas WHERE username LIKE 'Usuario%';
   ```

   > Observación: el simbolo de `%` representa cualquier texto

3. Ordenar por valores de las columnas

   ```sql
   SELECT columna1, columna2
      FROM nombre_tabla
      ORDER BY columna1 (ASC | DESC), columna2 (ASC | DESC) ...

   SELECT * FROM cuentas
   ORDER BY "password" ASC, username DESC
   ```

4. Agrupación de registros
   Para poder agrupar registros debemos de conocer las funciones de agregación más comunes:

   AVG(), COUNT(), MAX() ,MIN(), SUM()

   ```sql
   SELECT
   columna1, columna2
   funcion_agregacion(column_3)
   FROM
   nombre_tabla
   GROUP BY
   column_1,
   column_2,

   --Sin GroupBy
   SELECT SUM(quantity*unit_price) FROM order_details

   --Con GroupBy
   SELECT product_id, SUM(quantity*unit_price) FROM order_details
   GROUP BY (product_id)
   ORDER BY SUM(quantity*unit_price) DESC

   --Con agrupación de 2 columnas
   SELECT product_id, order_id, SUM(quantity*unit_price) FROM order_details
   GROUP BY (product_id, order_id)
   ORDER BY order_id DESC
   ```

5. Ejemplo con Joins

   ```sql
   SELECT pr.product_name, SUM(od.quantity*od.unit_price)
   FROM order_details od
   LEFT JOIN products pr
   ON pr.product_id = od.product_id
   GROUP BY (pr.product_id)
   ORDER BY SUM(od.quantity*od.unit_price) DESC;
   ```
