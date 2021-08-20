#include<iostream>
using namespace std; 
struct Atleta{
    string nombre;
    string disciplina;
    string nacionalidad;
    int cantidad_medallas;
    double estatura;
    int peso;
    bool inscrito;
    void imprimir(){
    	cout << disciplina <<endl;
    	cout << nacionalidad <<endl;
    	cout << cantidad_medallas <<endl;
    	cout << estatura <<endl;
    	cout << peso <<endl;
    	imprimirEstrellas();
	}
	void asignar_estrellas(int valor){
		estrellas = valor;
	}
	private:
		int estrellas;
		void imprimirEstrellas(){
			cout << estrellas <<endl;
		}
}; 
int main(){
    setlocale(LC_ALL,"spanish");    
    Atleta Usain_Bolt;
    Usain_Bolt.disciplina = "Atletismo";
    Usain_Bolt.nacionalidad = "Jamaica";
    Usain_Bolt.cantidad_medallas = 8;
    Usain_Bolt.estatura = 1.95;
    Usain_Bolt.peso = 94;   
    Usain_Bolt.asignar_estrellas(4);
	
	Atleta diego;
    diego.disciplina = "Pesas";
    diego.nacionalidad = "Peruana";
    diego.cantidad_medallas = 20;
    diego.estatura = 1.75;
    diego.peso = 80; 
    diego.asignar_estrellas(10);
	 
    Usain_Bolt.imprimir();  
	diego.imprimir();
	      
    return 0;
}
