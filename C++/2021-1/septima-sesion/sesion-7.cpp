#include <iostream>
using namespace std;
 
int obtener_mayor(int, int);
int obtener_mayor(int, int, int);
 
int main () {
        cout << obtener_mayor(3,5,2) << endl;
}
 
int obtener_mayor(int primero, int segundo){
        if (primero > segundo) return primero;
        return segundo;
}
 
int obtener_mayor(int primero, int segundo, int tercero) {
        int mayor = obtener_mayor(primero, segundo);
        mayor = obtener_mayor(mayor, tercero);
        return mayor;
}
