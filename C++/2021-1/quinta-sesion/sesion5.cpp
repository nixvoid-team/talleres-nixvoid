#include<iostream>
using namespace std;
int main() {
  int temperatura[3];
  int indice = 2;
  int* puntero = temperatura;
  temperatura[0] = 25;
  temperatura[1] = 65;
  temperatura[2] = 15;
  cout << temperatura[indice] << endl;
  puntero++;
  cout << *puntero << endl;
}
