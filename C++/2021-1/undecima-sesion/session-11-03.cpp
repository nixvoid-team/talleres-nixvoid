#include<iostream>
using namespace std;

struct Cliente{ //POD
	string nombre;
	string dni;
	int ticket;
	Cliente* siguiente;
};
void anadir(Cliente* primero, Cliente* ultimo){
	Cliente* nodo = primero;
	while(nodo->siguiente != NULL){
		nodo = nodo->siguiente;
	}
	nodo->siguiente = ultimo;
}
void recorrer(Cliente* primero){
	Cliente* nodo = primero;
	while(nodo->siguiente!= NULL){
		cout << nodo->nombre << "-" << nodo->dni << endl;
		nodo = nodo->siguiente;
	}
	cout << nodo->nombre << "-" << nodo->dni << endl;
}
void atender(Cliente* primero){
	if(primero->siguiente != NULL){
		*primero = *primero->siguiente;
	}
}
int main(){
	setlocale(LC_ALL,"spanish");
	
	Cliente rony;
	rony.nombre = "Rony";
	rony.dni = "9999999";
	rony.ticket = 123;
	rony.siguiente = NULL;
	
	Cliente marco;
	marco.nombre = "Marco";
	marco.dni = "9999998";
	marco.ticket = 124;
	marco.siguiente = NULL;
	
	Cliente pedro;
	pedro.nombre = "Pedro";
	pedro.dni = "9999997";
	pedro.ticket = 125;
	pedro.siguiente = NULL;
	
	Cliente sofia;
	sofia.nombre = "Sofia";
	sofia.dni = "9999995";
	sofia.ticket = 126;
	sofia.siguiente = NULL;
	
	Cliente maria;
	maria.nombre = "María";
	maria.dni = "9999994";
	maria.ticket = 127;
	maria.siguiente = NULL;
	
	anadir(&rony,&marco);
	anadir(&rony,&pedro);
	anadir(&rony,&sofia);
	anadir(&rony,&maria);
	
	atender(&rony);
	atender(&rony);
	
	recorrer(&rony);
	
	return 0;
}
