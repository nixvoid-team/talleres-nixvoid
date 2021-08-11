package com.pe.desing.academic.abstractFactory;

import com.pe.desing.academic.abstractFactory.Factory.FurnitureFactory;
import com.pe.desing.academic.abstractFactory.Furniture.Silla.ISilla;

/**
 * Codigo cliente: Se encarga de construir los productos
 * sin importar la implementacion de cada uno.
 */

public class App {
    private final FurnitureFactory furnitureFactory;
    private ISilla silla;

    public App(FurnitureFactory furnitureFactory) {
        this.furnitureFactory = furnitureFactory;
    }

    void createFurniture(){
        this.silla = furnitureFactory.createSilla();
    }

}
