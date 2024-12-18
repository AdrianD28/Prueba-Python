# Gilded Rose Refactoring Kata

Este proyecto es una implementación del famoso "Gilded Rose Refactoring Kata". El objetivo es gestionar la calidad y el tiempo de venta de diferentes ítems en un inventario, aplicando reglas específicas para cada tipo de ítem.

## Estructura del Proyecto

El proyecto contiene dos archivos principales:

- `prueba_python/app/prueba1.py`: Contiene la función `encontrar_subset`, que encuentra el primer par de números en un conjunto que suman un valor dado.
- `prueba_python/app2/prueba2.ts`: Contiene las clases `Item` y `GildedRose`, que gestionan la actualización de la calidad y el tiempo de venta de los ítems.

## Funcionalidad

### `encontrar_subset(M, N)`

Esta función recibe un conjunto de números `M` y un número entero `N`. Devuelve el primer par de números en `M` que suman `N`. Si no se encuentra ningún par, retorna una lista vacía.

#### Ejemplo de uso:

python
resultado = encontrar_subset([2, 5, 8, 14, 0], 10)
print(resultado) # Debería imprimir [2, 8]

### Clases `Item` y `GildedRose`

- **Item**: Representa un ítem en el inventario con propiedades como `name`, `sellIn` y `quality`.
- **GildedRose**: Maneja una lista de ítems y actualiza su calidad y tiempo de venta según las reglas definidas.

#### Reglas de actualización:

- **Aged Brie**: La calidad aumenta con el tiempo.
- **Backstage passes**: La calidad aumenta más cerca del evento, pero se vuelve 0 después del evento.
- **Sulfuras**: No cambia.
- **Conjured**: La calidad disminuye más rápido que los ítems normales.
- **Ítems normales**: La calidad disminuye con el tiempo.