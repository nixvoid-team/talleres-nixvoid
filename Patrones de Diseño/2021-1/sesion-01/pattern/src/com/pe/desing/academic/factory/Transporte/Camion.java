package com.pe.desing.academic.factory.Transporte;

/**
 * Clase concreta: distintas formas de implementar la interfaz.
 * Un Camion es una forma de transportar productos.
 */

public class Camion implements Transporte{
    @Override
    public void ruta(String from, String to) {
        System.out.println("Camion va de: " + from+ ", " + to );
    }
}
