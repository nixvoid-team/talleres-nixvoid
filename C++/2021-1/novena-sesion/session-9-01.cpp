#include<iostream>
using namespace std;
 
int main(){
    setlocale(LC_ALL,"spanish");
    char palabra[] = "Universidad";
    cout<<palabra<<endl;
    
    for(int i=0;i<sizeof(palabra)/sizeof(char);i++){
        palabra[i]=palabra[i] + 1;
    }
    cout<<palabra<<endl;
    
    return 0;
}
