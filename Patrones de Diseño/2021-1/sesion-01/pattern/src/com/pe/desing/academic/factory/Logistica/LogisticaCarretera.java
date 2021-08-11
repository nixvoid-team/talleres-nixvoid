package com.pe.desing.academic.factory.Logistica;

import com.pe.desing.academic.factory.Transporte.Camion;
import com.pe.desing.academic.factory.Transporte.Transporte;

/**
 * Clases creadora concreta, se encarga de crear diferentes tipos de productos en si.
 * Esta implementacion puede ser crear una nueva o buscar una ya creada.
 */

public class LogisticaCarretera extends Logistica{
    @Override
    Transporte createTransport() {
        return new Camion();
    }
}