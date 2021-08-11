package com.pe.desing.academic.abstractFactory.Factory;

import com.pe.desing.academic.abstractFactory.Furniture.Mesa.IMesa;
import com.pe.desing.academic.abstractFactory.Furniture.Mesa.VictorianMesa;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.ISilla;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.VictorianSilla;
import com.pe.desing.academic.abstractFactory.Furniture.Sofa.ISofa;
import com.pe.desing.academic.abstractFactory.Furniture.Sofa.VictorianSofa;

/**
 * Fabricas concreta: producen una familia de productos
 * que pertenecen a una unica variante. Esta fabrica granatiza que los
 * productos que creen sean compatibles entre si.
 */

public class FurnitureVictorian implements FurnitureFactory {
    @Override
    public IMesa createMesa() {
        System.out.println("Crear mesa tipo estilo Victoriana");
        return new VictorianMesa();
    }

    @Override
    public ISilla createSilla() {
        System.out.println("Crear silla tipo estilo Victoriana");
        return new VictorianSilla();
    }

    @Override
    public ISofa createSofa() {
        System.out.println("Crear sofa tipo estilo Victoriana");
        return new VictorianSofa();
    }
}
