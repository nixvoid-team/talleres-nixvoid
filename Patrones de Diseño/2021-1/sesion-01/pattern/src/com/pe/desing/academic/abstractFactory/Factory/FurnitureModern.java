package com.pe.desing.academic.abstractFactory.Factory;

import com.pe.desing.academic.abstractFactory.Furniture.Mesa.IMesa;
import com.pe.desing.academic.abstractFactory.Furniture.Mesa.ModernMesa;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.ISilla;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.ModernSilla;
import com.pe.desing.academic.abstractFactory.Furniture.Sofa.ISofa;
import com.pe.desing.academic.abstractFactory.Furniture.Sofa.ModernSofa;

/**
 * Fabricas concreta: producen una familia de productos
 * que pertenecen a una unica variante. Esta fabrica granatiza que los
 * productos que creen sean compatibles entre si.
 */

public class FurnitureModern implements FurnitureFactory {
    @Override
    public IMesa createMesa() {
        System.out.println("Crear mesa tipo estilo moderno");
        return new ModernMesa();
    }

    @Override
    public ISilla createSilla() {
        System.out.println("Crear silla tipo estilo moderno");
        return new ModernSilla();
    }

    @Override
    public ISofa createSofa() {
        System.out.println("Crear sofa tipo estilo moderno");
        return new ModernSofa();
    }
}
