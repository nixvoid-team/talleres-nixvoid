package com.pe.desing.academic.factory.Transporte;

/**
 * Clase concreta: distintas formas de implementar la interfaz.
 * Un barco es una forma de transportar productos.
 */

public class Barco implements Transporte{
    @Override
    public void ruta(String from, String to) {
        System.out.println("Barco va de: " + from+ ", " + to );
    }
}
