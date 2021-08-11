package com.pe.desing.academic.abstractFactory;

import com.pe.desing.academic.abstractFactory.Factory.FurnitureVictorian;
import com.pe.desing.academic.abstractFactory.Factory.FurnitureFactory;

public class Pagina {
    public static void main(String[] args) {
        FurnitureFactory furnitureFactory = new FurnitureVictorian();
        App app = new App(furnitureFactory);
        app.createFurniture();
    }
}
