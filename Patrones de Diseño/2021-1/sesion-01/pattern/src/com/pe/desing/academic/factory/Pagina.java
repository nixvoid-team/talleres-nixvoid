package com.pe.desing.academic.factory;

import com.pe.desing.academic.factory.Logistica.Logistica;
import com.pe.desing.academic.factory.Logistica.LogisticaCarretera;
import com.pe.desing.academic.factory.Logistica.LogisticaMartitima;

public class Pagina{
    public static void main(String[] args) {
        Logistica callao = new LogisticaMartitima();
        Logistica panamericana = new LogisticaCarretera();

        callao.enviar("Callao", "Panama");
        panamericana.enviar("Lima","Trujillo");
    }
}
