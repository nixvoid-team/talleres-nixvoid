package com.pe.desing.academic.factory.Logistica;

import com.pe.desing.academic.factory.Transporte.Transporte;

/**
 * Clase creadora: Declara el metodo 'crear' que retorne con el tipo de la interfaz producto.
 * Se declara abtracto para que cada subClase defina como se crea.
 */
public abstract class Logistica {
    abstract Transporte createTransport();
    public void enviar(String from, String to){
        Transporte transporte = createTransport();
        transporte.ruta(from, to);
    }
}
