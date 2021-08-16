#include<iostream>
 
using namespace std;
 
int main(){
    int longitud,elemento;
    
    while(true){
        cout << endl << "Ingrese la cantidad de elementos: ";
        cin >> longitud;
        
        if(longitud<10){
            break;
        }   
        else{
            cout << endl << "El vector deber ser de longitud menor que 10";
        }
    }
    
    int vector[longitud];
    
    for(int indice = 0; indice < longitud ; indice++){
        cout << endl << "Ingrese un elemento: ";
        cin >> elemento;
 
        vector[indice]=3*elemento;
    }
    
    cout << endl;
    
    for(int indice = 0; indice < longitud ; indice++){
        cout << " " << vector[indice];
    }
    
    return 0;
}
