package com.pe.desing.academic.singleton;

public class Database {
    // Este campo almacena la instancia singleton.
    // Se declara estatico
    private static Database instance;

    private Database(){

    }

    public static Database getInstance() {
        if(instance == null){
            instance = new Database();
        }
        return instance;
    }
}
