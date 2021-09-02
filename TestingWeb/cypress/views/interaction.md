
# Cypress nos permite realizar acciones en elementos del DOM

- type
- clear
- click
- dbclick
- rightclick
- check
- uncheck

## Pero por defecto cypress realiza verificaciones para asegurar que el DOM esta listo para recibir modificaciones.
## En gran parte emula las acciones que realizaria un usuario gracias a estas, pero pueden ser sobreescritas.
## Estas verificaciones pueden ser:

- Verifica visibilidad
- Verifica si el elemento es deshabilitado
- Verifica si esta cubierto por otro elemento
- Verifica coordenadas
- Verifica si no ha sido removido del DOM
