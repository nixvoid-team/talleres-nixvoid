#include<iostream>
using namespace std;

struct Deportista{ //POD
	string nombre;
	Deportista* siguiente;
};
void anadir(Deportista* primero, Deportista* ultimo){
	Deportista* nodo = primero;
	while(nodo->siguiente != NULL){
		nodo = nodo->siguiente;
	}
	nodo->siguiente = ultimo;
}
void recorrer(Deportista* primero){
	Deportista* nodo = primero;
	while(nodo->siguiente!= NULL){
		cout << nodo->nombre << endl;
		nodo = nodo->siguiente;
	}
	cout << nodo->nombre << endl;
}
void atender(Deportista* primero){
	if(primero->siguiente != NULL){
		*primero = *primero->siguiente;
	}
}
int main(){
	Deportista rony;
	rony.nombre = "Rony";
	rony.siguiente = NULL;
	
	Deportista marco;
	marco.nombre = "Marco";
	marco.siguiente = NULL;
	
	Deportista pedro;
	pedro.nombre = "Pedro";
	pedro.siguiente = NULL;
	
	Deportista sofia;
	sofia.nombre = "Sofia";
	sofia.siguiente = NULL;
	
	anadir(&rony,&marco);
	anadir(&rony,&pedro);
	anadir(&rony,&sofia);
	
	recorrer(&rony);
	cout << "1" << endl;
	atender(&rony);
	recorrer(&rony);
	cout << "2" << endl;
	atender(&rony);
	recorrer(&rony);
	cout << "3" << endl;
	atender(&rony);
	recorrer(&rony);
	return 0;
}
