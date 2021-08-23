#include<iostream>
 
using namespace std;
 
int main(){
    
    int posicion,indice1=0;
    double sueldos[10],suma_sueldos=0,sueldo,sueldo_mayor=-9998,sueldo_segundo_mayor=-9999;
    
    for(int indice1=0; indice1<10; indice1++){
        
        cout << endl << "Ingrese el sueldo " << indice1+1 << ": ";
        cin>>sueldo;
 
        sueldos[indice1] = sueldo;
        
        suma_sueldos+=sueldo;
    }
    
    double promedio = double (suma_sueldos)/10; // cast
    
    for(int indice2=0; indice2<10; indice2++){
        
        if(sueldos[indice2]>sueldo_mayor and sueldos[indice2]>sueldo_segundo_mayor){
            sueldo_segundo_mayor=sueldo_mayor;
            sueldo_mayor=sueldos[indice2];
        }
        
        if(sueldos[indice2]<sueldo_mayor and sueldos[indice2]>sueldo_segundo_mayor){
            sueldo_segundo_mayor=sueldos[indice2];
        }
    }
    
    for(int indice3=0; indice3<10; indice3++){
        if(sueldos[indice3]==sueldo_segundo_mayor){
            posicion=indice3;   
        }
    }
    
    cout << endl << "El promedio de los sueldos es: " << promedio;
    cout << endl << "El segundo mayor de los sueldos es: " << sueldo_segundo_mayor;
    cout << endl << "La posicion del segundo mayor sueldo es: " << posicion;
    cout << endl << "El excedente del mayor sueldo y el segundo mayor sueldo es: " << sueldo_mayor - sueldo_segundo_mayor;
    
    return 0;
}
