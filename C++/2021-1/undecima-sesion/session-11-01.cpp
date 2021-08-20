#include<iostream>
using namespace std;
struct Estudiante{
	string nombre;
	Estudiante* siguiente;
};
void anadir(Estudiante* primero, Estudiante* ultimo);
void eliminar(Estudiante* primero);
void leer(Estudiante* primero);
int main(){
	Estudiante primero;
	primero.nombre = "Carlos";
	primero.siguiente = NULL;
	
	Estudiante segundo;
	segundo.nombre = "Pedro";
	segundo.siguiente = NULL;
	
	Estudiante tercero;
	tercero.nombre = "Lancelot";
	tercero.siguiente = NULL;
	
	//primero.siguiente = &segundo;
	//segundo.siguiente = &tercero;
	anadir(&primero, &segundo);
	anadir(&primero, &tercero);
	
	//leer(&primero);
	
	eliminar(&primero);
	leer(&primero);
	cout << "otro" << endl;
	eliminar(&primero);
	leer(&primero);
}
void anadir(Estudiante* primero, Estudiante* ultimo){
	Estudiante* nodo = primero;
	while(nodo->siguiente != NULL){
		nodo = nodo->siguiente;
	}
	nodo->siguiente = ultimo;
}
void eliminar(Estudiante* primero){
	if(primero->siguiente != NULL){
		*primero = *primero->siguiente;
	}
}
void leer(Estudiante* primero){
	Estudiante* nodo = primero;
	while(nodo->siguiente!= NULL){
		cout << nodo->nombre << endl;
		nodo = nodo->siguiente;
	}
	cout << nodo->nombre << endl;
}
