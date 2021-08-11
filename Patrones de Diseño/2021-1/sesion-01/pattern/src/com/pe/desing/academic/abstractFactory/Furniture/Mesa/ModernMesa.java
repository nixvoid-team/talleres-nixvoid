package com.pe.desing.academic.abstractFactory.Furniture.Mesa;

/**
 * Los productos concretos: son creados por las disntintas fabricas
 * Defino las como se crearan cada variante.
 */

public class ModernMesa implements IMesa {
    @Override
    public void hasLegs() {
        System.out.println("Se tiene 4 patas para mesa moderna.");
    }

    @Override
    public void getMaterial() {
        System.out.println("El material es cuero para mesa moderna.");
    }
}
