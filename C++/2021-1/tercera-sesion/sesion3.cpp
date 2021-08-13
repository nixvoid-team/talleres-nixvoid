#include <iostream>
using namespace std;
int main(){
	setlocale(LC_ALL, "es_ES");
	int numero;
	int invertido = 0;
	cout<<"Ingrese un numero: ";
	cin>>numero;
	cout<<"Número invertido:  ";
	do{
		cout<<numero%10;
		invertido = ( invertido * 10 ) + numero%10;
		numero/=10;
	}while(numero>0);
	
	cout  << endl << invertido <<endl;
	return 0;
}
int calcular(){
}

/*
1568 --> 8651

1568	resto --> 8
156		1568/10
156 	resto --> 6	
8*10	80 + 6  -->  86
*/

