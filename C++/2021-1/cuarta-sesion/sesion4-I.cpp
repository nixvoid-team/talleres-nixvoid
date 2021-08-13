#include<iostream>
using namespace std;
int main(){
	int numero = 0;
	int* puntero = &numero;
	for( ; 2*(*puntero)+5 < 100; *puntero+=1){
		cout  <<  2*(*puntero)+5 << endl;
	}
	return 0;
}
