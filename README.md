# Reto técnico Lagash

## Descripción

Crear una aplicación web que permita seleccionar lugares para la entrada a un cine.

## Prototipo

Este es el diseño deseado para la aplicación

![prototipo 1](https://user-images.githubusercontent.com/8524564/51359831-fdf6d100-1a8e-11e9-8e13-26c4cd1dbb09.png)
![prototipo 2](https://user-images.githubusercontent.com/8524564/51359840-0bac5680-1a8f-11e9-8d76-2027755f7a33.png)

Consiste en dos pantallas, la primera contiene dos secciones: **Mapa del cine** y **Resumen del pedido**. La tercera es una pantalla que contiene el texto *“Gracias por tu compra”*.

### Mapa del cine

Son 4 círculos con los números del 1 al 4 que representan lugares del cine. Los asientos pueden tener 3 estados diferentes, *ocupado* (circulo gris obscuro), *disponible* (gris claro), y *seleccionado* (azul).

Los requerimientos son:

- Hacer que el asiento #2 este “ocupado” siempre.
- El usuario no puede seleccionar un lugar con estatus de “ocupado”.
- Si el usuario da clic a un lugar “disponible”, este pasara a tener estatus de “seleccionado”.
- Si el usuario da clic a un lugar “seleccionado”, este pasara a tener estatus de “disponible”.

### Resumen del pedido

El resumen consiste en el *monto*, y un botón para pagar.

Los requerimientos son:

- El total se debe ir actualizando dependiendo del número de asientos seleccionados. Cada asiento tiene un costo de $200. Si el usuario elige 3 o más asientos, obtiene un 50% de descuento sobre total.
- Al presionar el botón “Pagar ahora”, redireccionar a una página que contenga el texto “Gracias por tu compra”.

## Producto final

### [Demo] (https://anndygarcia.github.io/AppCine/)

![Mapa cine](https://user-images.githubusercontent.com/8524564/51359859-1e269000-1a8f-11e9-91bd-833e972ff987.png)
![Resumen pedido](https://user-images.githubusercontent.com/8524564/51359860-1ebf2680-1a8f-11e9-8f8a-6087b29fd2d0.png)
![Pantalla final](https://user-images.githubusercontent.com/8524564/51359861-1ebf2680-1a8f-11e9-944d-cc830631a044.png)


## Tecnologías usadas

- Angular
- Bootstrap
- CSS
- HTML