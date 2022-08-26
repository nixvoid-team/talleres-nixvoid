-- Agregar una columna de activo a la tabla cuentas
-- Cambiar el nombre de PASSWORD a secret_password
-- Eliminar la columna activo
-- Cambiar el nombre de la tabla 'cuentas' a 'usuarios'
ALTER TABLE
    cuentas
ADD
    COLUMN activo BOOLEAN NOT NULL;

ALTER TABLE
    cuentas RENAME COLUMN "password" TO secret_password;

ALTER TABLE
    cuentas DROP COLUMN activo;

ALTER TABLE
    cuentas RENAME TO usuarios