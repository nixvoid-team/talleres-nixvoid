package com.pe.desing.academic.abstractFactory.Factory;

import com.pe.desing.academic.abstractFactory.Furniture.Mesa.IMesa;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.ISilla;
import com.pe.desing.academic.abstractFactory.Furniture.Sofa.ISofa;

/**
 * Esta interfaz abstract factory: define los metodos que el
 * cliente debe utilizar para producir distintos tipos de elementos
 * de una misma variante.
 */

public interface FurnitureFactory {
    IMesa createMesa();
    ISilla createSilla();
    ISofa createSofa();
}
