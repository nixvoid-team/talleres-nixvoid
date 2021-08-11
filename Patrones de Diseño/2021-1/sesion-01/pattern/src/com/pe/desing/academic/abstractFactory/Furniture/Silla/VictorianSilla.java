package com.pe.desing.academic.abstractFactory.Furniture.Silla;

/**
 * Los productos concretos: son creados por las disntintas fabricas
 * Defino las como se crearan cada variante.
 */

public class VictorianSilla implements ISilla{
    @Override
    public void hasLegs() {
        System.out.println("Se tiene 4 patas para silla victorian.");
    }

    @Override
    public void sitOn() {
        System.out.println("Sentarse en silla victorian.");
    }
}
