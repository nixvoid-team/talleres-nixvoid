#include<iostream>
using namespace std;

int main(){
	int numeroOriginal = 0, numeroInvertido = 0;
	int* invertido = &numeroInvertido;
	int* original = &numeroOriginal;
	do{
		cout <<" ingrese el numero a invertir: ";
		cin >> *original;
	}while (numeroOriginal < 0);
	
	while(numeroOriginal > 0){
		*invertido = (*invertido * 10) + (*original % 10);
		*original= *original / 10 ;
	}
	cout << "El numero invertido es: " << numeroInvertido;
	return 0;
}
