#include<iostream>
using namespace std;
class Pokemon {
  public:
	  string nombre;
	  string tipo;
	  int ps;
	  int ataque;
	  int defensa;
	  Pokemon(string nombre, string tipo, int ps, int ataque, int defensa){
	  	this->nombre = nombre;
	  	this->tipo = tipo;
	  	this->ps = ps;
	  	this->ataque = ataque;
	  	this->defensa = defensa;
	  }
	  int get_nivel(){
	  	return this->nivel;
	  }
  private: 
  	int nivel;
	void set_nivel(int nivel){
	  	this->nivel = nivel;
	}  
};
int main(){
	Pokemon caterpie("Caterpie","Insecto",3,2,3);
	cout << caterpie.nombre << endl; 
	cout << caterpie.ataque << endl; 
	cout << caterpie.get_nivel() << endl; 
	return 0;
}
